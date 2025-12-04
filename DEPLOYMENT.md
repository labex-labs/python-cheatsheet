# Quiz Tracking Feature Deployment Guide

This project uses Cloudflare Workers to track quiz completion counts.

## Feature Overview

When a user completes a quiz, the system automatically calls the backend API to record the completion count. Data is stored in Cloudflare KV.

## Setup Steps

### 1. Create Cloudflare KV Namespace

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** > **KV**
3. Click **Create a namespace**
4. Enter name: `PYTHONCHEATSHEET_QUIZ_KV`
5. Record the generated **Namespace ID**

### 2. Configure wrangler.toml

1. Open `wrangler.toml` file
2. Replace `your-production-kv-namespace-id` with the actual KV Namespace ID from step 1
3. Replace `your-preview-kv-namespace-id` with a preview KV Namespace ID (optional, for local development)

### 3. Build and Deploy

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Workers:
   ```bash
   npm run wrangler:deploy
   ```

Alternatively, you can use Wrangler CLI directly:

```bash
wrangler deploy
```

### 4. Local Development

To test locally with Wrangler:

1. Ensure `wrangler.toml` is configured with your KV Namespace IDs
2. Build the project:
   ```bash
   npm run build
   ```
3. Start local development server:
   ```bash
   npm run wrangler:dev
   ```

The local server will serve your static assets and handle API routes.

## API Endpoints

### POST `/api/quiz/record`

Record quiz completion count.

**Request Example:**

```bash
curl -X POST https://your-domain.com/api/quiz/record \
  -H "Content-Type: application/json" \
  -d '{
    "quizId": "quiz-xxx",
    "pagePath": "/cheatsheet/basics"
  }'
```

### GET `/api/quiz/stats`

Get quiz completion statistics.

**Request Example:**

```bash
curl "https://your-domain.com/api/quiz/stats?quizId=quiz-xxx&pagePath=/cheatsheet/basics"
```

## Local Development (Optional)

If you want to test Functions locally with Wrangler CLI, you can create a `wrangler.toml` file:

1. Copy `wrangler.toml.example` to `wrangler.toml`
2. Replace the placeholder values with your actual KV Namespace IDs
3. Run `wrangler pages dev dist`

**Note:** Local development is optional. You can also test directly on Cloudflare Pages preview deployments, which will use the KV bindings configured in the Dashboard.

## Notes

1. **KV Storage Limits**: Cloudflare KV has read/write limits. Refer to [Cloudflare KV Documentation](https://developers.cloudflare.com/kv/)
2. **CORS**: API endpoints are configured with CORS to allow cross-origin requests
3. **Error Handling**: API call failures won't affect user experience, errors are logged to console
