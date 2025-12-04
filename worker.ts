/// <reference types="@cloudflare/workers-types" />

const SUPPORTED_LOCALES = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ru', 'ko', 'pt'] as const

interface QuizRecordRequest {
  quizId: string
  pagePath: string
  userId?: number
}

/**
 * Normalize path to English version by removing language prefix
 * This ensures all language versions of the same page share the same quiz data
 */
function normalizePathToEnglish(path: string): string {
  const segments = path.split('/').filter(Boolean)
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as typeof SUPPORTED_LOCALES[number])) {
    segments.shift()
    return segments.length > 0 ? '/' + segments.join('/') : '/'
  }
  return path
}

export default {
  async fetch(request: Request, env: { PYTHONCHEATSHEET_QUIZ_KV: KVNamespace; ASSETS?: { fetch: (_req: Request) => Promise<Response> } }): Promise<Response> {
    const url = new URL(request.url)

    // Handle quiz API routes
    if (url.pathname.startsWith('/api/quiz/')) {
      return handleQuizAPI(request, env)
    }

    // For all other requests, let Cloudflare handle static assets
    // If ASSETS is available (for Workers with assets), use it; otherwise pass through
    if (env.ASSETS) {
      return env.ASSETS.fetch(request)
    }

    // Fallback: return the request as-is (Cloudflare will handle it)
    return fetch(request)
  },
}

async function handleQuizAPI(request: Request, env: { PYTHONCHEATSHEET_QUIZ_KV: KVNamespace }): Promise<Response> {
  const url = new URL(request.url)

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  // Handle POST /api/quiz/record
  if (url.pathname === '/api/quiz/record' && request.method === 'POST') {
    return handleRecordQuiz(request, env)
  }

  // Handle GET /api/quiz/stats
  if (url.pathname === '/api/quiz/stats' && request.method === 'GET') {
    return handleGetStats(request, env)
  }

  // Handle GET /api/quiz/user-status
  if (url.pathname === '/api/quiz/user-status' && request.method === 'GET') {
    return handleGetUserStatus(request, env)
  }

  return new Response(
    JSON.stringify({ error: 'Not found' }),
    {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}

async function handleRecordQuiz(request: Request, env: { PYTHONCHEATSHEET_QUIZ_KV: KVNamespace }): Promise<Response> {
  try {
    const body = await request.json() as QuizRecordRequest
    const { quizId, pagePath } = body

    if (!quizId || !pagePath) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: quizId and pagePath' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    const normalizedPath = normalizePathToEnglish(pagePath)

    // Generate unique key: combine pythoncheatsheet prefix, normalized pagePath and quizId
    // Format: pythoncheatsheet:quiz:${normalizedPath}:${quizId}
    const key = `pythoncheatsheet:quiz:${normalizedPath}:${quizId}`

    // Get current count from KV
    const currentCount = await env.PYTHONCHEATSHEET_QUIZ_KV.get(key)
    const count = currentCount ? parseInt(currentCount, 10) : 0

    // Increment count
    const newCount = count + 1

    // Save to KV
    await env.PYTHONCHEATSHEET_QUIZ_KV.put(key, newCount.toString())

    // Record user completion status if user is authenticated
    const cookies = request.headers.get('Cookie') || ''
    const userIdMatch = cookies.match(/user_id=(\d+)/)
    let userId: number | undefined
    if (userIdMatch) {
      userId = parseInt(userIdMatch[1], 10)
      // Format: pythoncheatsheet:user-quiz:${userId}:${normalizedPath}:${quizId}
      const userKey = `pythoncheatsheet:user-quiz:${userId}:${normalizedPath}:${quizId}`
      await env.PYTHONCHEATSHEET_QUIZ_KV.put(userKey, 'true')
    }

    return new Response(
      JSON.stringify({
        success: true,
        quizId,
        pagePath: normalizedPath,
        count: newCount,
        ...(userId && { userId }),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    )
  } catch (error) {
    console.error('Error recording quiz completion:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    )
  }
}

async function handleGetStats(request: Request, env: { PYTHONCHEATSHEET_QUIZ_KV: KVNamespace }): Promise<Response> {
  try {
    const url = new URL(request.url)
    const quizId = url.searchParams.get('quizId')
    const pagePath = url.searchParams.get('pagePath')

    if (!quizId || !pagePath) {
      return new Response(
        JSON.stringify({ error: 'Missing required query parameters: quizId and pagePath' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    const normalizedPath = normalizePathToEnglish(pagePath)
    // Generate unique key with pythoncheatsheet prefix
    // Format: pythoncheatsheet:quiz:${normalizedPath}:${quizId}
    const key = `pythoncheatsheet:quiz:${normalizedPath}:${quizId}`

    const countStr = await env.PYTHONCHEATSHEET_QUIZ_KV.get(key)
    const count = countStr ? parseInt(countStr, 10) : 0

    return new Response(
      JSON.stringify({
        success: true,
        quizId,
        pagePath: normalizedPath,
        count,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'public, max-age=60, s-maxage=60',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching quiz stats:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    )
  }
}

async function handleGetUserStatus(request: Request, env: { PYTHONCHEATSHEET_QUIZ_KV: KVNamespace }): Promise<Response> {
  try {
    const url = new URL(request.url)
    const quizId = url.searchParams.get('quizId')
    const pagePath = url.searchParams.get('pagePath')

    if (!quizId || !pagePath) {
      return new Response(
        JSON.stringify({ error: 'Missing required query parameters: quizId and pagePath' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    // Get userId from cookie (LabEx SSO cookie)
    const cookies = request.headers.get('Cookie') || ''
    const userIdMatch = cookies.match(/user_id=(\d+)/)

    if (!userIdMatch) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    const userId = parseInt(userIdMatch[1], 10)

    const normalizedPath = normalizePathToEnglish(pagePath)
    // Generate unique key for user completion status with pythoncheatsheet prefix
    // Format: pythoncheatsheet:user-quiz:${userId}:${normalizedPath}:${quizId}
    const key = `pythoncheatsheet:user-quiz:${userId}:${normalizedPath}:${quizId}`

    const completedStr = await env.PYTHONCHEATSHEET_QUIZ_KV.get(key)
    const completed = completedStr === 'true'

    return new Response(
      JSON.stringify({
        success: true,
        quizId,
        pagePath: normalizedPath,
        userId,
        completed,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'private, no-cache, must-revalidate',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching user quiz status:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    )
  }
}

