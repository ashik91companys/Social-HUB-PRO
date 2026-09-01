// OpenAI provider adapter (text)
// This is a stub adapter. To enable real OpenAI calls, install the official SDK
// and implement the API calls where indicated below.

const fetch = require('node-fetch');

async function generateText(prompt, options = {}) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    // For demo, return a deterministic placeholder
    return { text: `DEMO: generated text for prompt: ${prompt}` };
  }

  // Example using OpenAI REST API (replace with official SDK as preferred):
  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: options.model || 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: options.maxTokens || 256,
    }),
  });
  if (!resp.ok) throw new Error(`OpenAI error: ${resp.statusText}`);
  const j = await resp.json();
  const content = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || j.choices?.[0]?.text || '';
  return { text: content, raw: j };
}

module.exports = { generateText };
