# Quiz Tracking Feature Deployment Guide

This project integrates Cloudflare Functions to track quiz completion counts.

## Feature Overview

When a user completes a quiz, the system automatically calls the backend API to record the completion count. Data is stored in Cloudflare KV.

## Setup Steps

### 1. Create Cloudflare KV Namespace

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** > **KV**
3. Click **Create a namespace**
4. Enter name: `PYTHONCHEATSHEET_QUIZ_KV`
5. Record the generated **Namespace ID**

### 2. Bind KV in Cloudflare Pages

**Important:** All production configuration is done in the Cloudflare Dashboard. No `wrangler.toml` file is required for production deployment.

1. Go to your Pages project
2. Go to **Settings** > **Functions**
3. In the **KV Namespace Bindings** section, click **Add binding**
4. Select the `PYTHONCHEATSHEET_QUIZ_KV` namespace created earlier
5. Set the variable name to `PYTHONCHEATSHEET_QUIZ_KV` (must match the binding name in code)

### 3. Deploy

After deploying to Cloudflare Pages, Functions will be automatically deployed. Ensure:

- `functions/` directory is included in the project
- KV Namespace is bound in Pages project settings (configured in step 2)

That's it! No `wrangler.toml` file is needed for production deployment. All configuration is done in the Cloudflare Dashboard.

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
