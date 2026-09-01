// Minimal AI service skeleton (Express)
// Usage: node index.js

const express = require('express');
const bodyParser = require('body-parser');
const { generateText } = require('./providers/openai');
const { generateImage } = require('./providers/replicate');

const app = express();
app.use(bodyParser.json());

// In-memory job store for MVP/demo
const jobs = new Map();
let nextJobId = 1;

function createJob(type, payload) {
  const id = String(nextJobId++);
  const job = { id, type, status: 'queued', payload, result: null, createdAt: new Date().toISOString() };
  jobs.set(id, job);
  return job;
}

async function runJob(job) {
  job.status = 'running';
  try {
    if (job.type === 'text') {
      const out = await generateText(job.payload.prompt, job.payload.options || {});
      job.result = out;
    } else if (job.type === 'image') {
      const out = await generateImage(job.payload.prompt, job.payload.options || {});
      job.result = out;
    }
    job.status = 'succeeded';
  } catch (err) {
    job.status = 'failed';
    job.result = { error: String(err) };
  }
}

app.post('/api/generate-text', async (req, res) => {
  const { prompt, options } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });
  const job = createJob('text', { prompt, options });
  // run async (not awaited)
  runJob(job);
  res.status(202).json({ jobId: job.id });
});

app.post('/api/generate-image', async (req, res) => {
  const { prompt, options } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });
  const job = createJob('image', { prompt, options });
  runJob(job);
  res.status(202).json({ jobId: job.id });
});

app.get('/api/jobs/:id', (req, res) => {
  const job = jobs.get(req.params.id);
  if (!job) return res.status(404).json({ error: 'job not found' });
  res.json(job);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`AI service running on port ${PORT}`));
