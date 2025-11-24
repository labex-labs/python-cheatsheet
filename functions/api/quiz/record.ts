/// <reference path="../../types.d.ts" />

export async function onRequestPost(context: {
  request: Request
  env: {
    PYTHONCHEATSHEET_QUIZ_KV: KVNamespace
  }
}): Promise<Response> {
  try {
    const { request, env } = context

    // Validate request method
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Parse request body
    const body = await request.json()
    const { quizId, pagePath } = body

    // Validate required fields
    if (!quizId || !pagePath) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: quizId and pagePath' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Generate unique key: combine pagePath and quizId
    const key = `quiz:${pagePath}:${quizId}`

    // Get current count from KV
    const currentCount = await env.PYTHONCHEATSHEET_QUIZ_KV.get(key)
    const count = currentCount ? parseInt(currentCount, 10) : 0

    // Increment count
    const newCount = count + 1

    // Save to KV
    await env.PYTHONCHEATSHEET_QUIZ_KV.put(key, newCount.toString())

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        quizId,
        pagePath,
        count: newCount,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    )
  } catch (error) {
    console.error('Error recording quiz completion:', error)
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

