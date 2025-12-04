/// <reference path="../../types.d.ts" />

const SUPPORTED_LOCALES = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ru', 'ko', 'pt'] as const

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

export async function onRequestGet(context: {
  request: Request
  env: {
    PYTHONCHEATSHEET_QUIZ_KV: KVNamespace
  }
}): Promise<Response> {
  try {
    const { request, env } = context

    // Validate request method
    if (request.method !== 'GET') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Get query parameters
    const url = new URL(request.url)
    const quizId = url.searchParams.get('quizId')
    const pagePath = url.searchParams.get('pagePath')

    // Validate required fields
    if (!quizId || !pagePath) {
      return new Response(
        JSON.stringify({ error: 'Missing required query parameters: quizId and pagePath' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Normalize path to English version to ensure all languages share the same quiz data
    const normalizedPath = normalizePathToEnglish(pagePath)
    // Generate unique key with pythoncheatsheet prefix
    // Format: pythoncheatsheet:quiz:${normalizedPath}:${quizId}
    const key = `pythoncheatsheet:quiz:${normalizedPath}:${quizId}`

    // Get count from KV
    const countStr = await env.PYTHONCHEATSHEET_QUIZ_KV.get(key)
    const count = countStr ? parseInt(countStr, 10) : 0

    // Return statistics
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
          // 设置短缓存，因为统计数据可能会变化
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
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    )
  }
}

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

