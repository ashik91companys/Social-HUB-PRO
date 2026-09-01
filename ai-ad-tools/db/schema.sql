-- Simple DB schema (Postgres) for campaigns, creatives, and jobs

CREATE TABLE IF NOT EXISTS campaigns (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  owner_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS creatives (
  id SERIAL PRIMARY KEY,
  campaign_id INT REFERENCES campaigns(id),
  type TEXT NOT NULL, -- 'text' | 'image'
  payload JSONB,
  url TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  job_key TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  result JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
