# AI Ad Tools - MVP (backend + frontend skeleton)

This folder contains a minimal, reviewable MVP for AI-driven ad generation. It is intentionally small and meant to be reviewed and extended.

What is included
- backend/: an Express-based, server-ready minimal AI service with endpoints:
  - POST /api/generate-text  -> starts a text-generation job
  - POST /api/generate-image -> starts an image-generation job
  - GET  /api/jobs/:id       -> get job status and result
- providers/: adapters for providers (OpenAI for text, Replicate for images) — stubs included
- frontend/: minimal React components (AdGenerator, VariantsList) that call the backend
- .env.example: required environment variables for a full run
- db/schema.sql: a simple schema for campaigns/creatives/jobs (Postgres)

How to run locally (demo mode)
1. From this folder run: npm install express body-parser node-fetch
2. Create a .env with any variables you want. If no API keys are provided, the service returns deterministic demo outputs.
3. Start the backend: node index.js
4. The frontend components are React snippets and can be integrated into your dashboard app; they call the backend endpoints above.

Required env vars (documented in .env.example)

Next steps (suggested)
- Wire the backend into your main app (this is a contained module under ai-ad-tools/).
- Replace provider stubs with real SDK usage, add retries, error handling, and caching.
- Add persistent DB and S3 storage for generated assets.
- Add authentication on the API endpoints and rate limiting.

