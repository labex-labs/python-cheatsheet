# Cloudflare Functions

This directory contains Cloudflare Pages Functions for tracking quiz completion counts.

## API Endpoints

### POST `/api/quiz/record`

Record quiz completion count.

**Request Body:**

```json
{
  "quizId": "quiz-xxx",
  "pagePath": "/cheatsheet/basics"
}
```

**Response:**

```json
{
  "success": true,
  "quizId": "quiz-xxx",
  "pagePath": "/cheatsheet/basics",
  "count": 1
}
```

### GET `/api/quiz/stats`

Get quiz completion statistics.

**Query Parameters:**

- `quizId`: quiz ID
- `pagePath`: page path

**Response:**

```json
{
  "success": true,
  "quizId": "quiz-xxx",
  "pagePath": "/cheatsheet/basics",
  "count": 5
}
```

## Cloudflare KV Setup

1. Create KV Namespace in Cloudflare Dashboard:
   - Go to Workers & Pages > KV
   - Create a new namespace named `PYTHONCHEATSHEET_QUIZ_KV`

2. Bind KV in Cloudflare Pages project:
   - Go to Pages project settings
   - Find Functions section
   - Add KV Namespace binding with name `PYTHONCHEATSHEET_QUIZ_KV`
   - Select the `PYTHONCHEATSHEET_QUIZ_KV` namespace created in step 1

That's all you need for production! All configuration is done in the Cloudflare Dashboard.

### Local Development (Optional)

If you want to test Functions locally with Wrangler CLI:

1. Copy `wrangler.toml.example` to `wrangler.toml`
2. Replace placeholder values with your actual KV Namespace IDs
3. Run `wrangler pages dev dist`

**Note:** Local development is optional. You can test directly on Cloudflare Pages preview deployments.

## Local Development

Use Wrangler CLI for local development:

```bash
# Install Wrangler (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Start local development server
wrangler pages dev dist
```

## Deployment

Functions are automatically deployed when deploying to Cloudflare Pages. Ensure:

1. KV Namespace is bound in Cloudflare Pages project settings (configured in Cloudflare Dashboard)
2. `functions/` directory is included in the project

**No `wrangler.toml` file is required for production deployment.** All configuration is done in the Cloudflare Dashboard.
