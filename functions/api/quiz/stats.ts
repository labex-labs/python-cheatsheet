/// <reference path="../../types.d.ts" />

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

    // Generate unique key
    const key = `quiz:${pagePath}:${quizId}`

    // Get count from KV
    const countStr = await env.PYTHONCHEATSHEET_QUIZ_KV.get(key)
    const count = countStr ? parseInt(countStr, 10) : 0

    // Return statistics
    return new Response(
      JSON.stringify({
        success: true,
        quizId,
        pagePath,
        count,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching quiz stats:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
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

