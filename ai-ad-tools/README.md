# AI Ad Tools - Project README

This directory contains the initial MVP for AI Ad Tools.

Quick overview
- Branch: feature/ai-ad-tools
- Location: ai-ad-tools/

Environment variables (.env.example)
- OPENAI_API_KEY - API key for OpenAI (text)
- REPLICATE_API_TOKEN - API token for Replicate (image)
- S3_BUCKET, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_REGION - optional storage
- DATABASE_URL - postgres://... or sqlite fallback

How to review
- The backend demo is under ai-ad-tools/backend
- Run the backend (node) and integrate the frontend snippets into your dashboard to test flows

If you want, I can open follow-up issues for:
- Persisting outputs to S3
- DB migrations
- Approval workflow
- Integrations with ad platforms
