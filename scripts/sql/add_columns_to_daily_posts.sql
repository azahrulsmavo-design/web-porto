-- Migration: Add extra columns to daily_posts
-- Run this in Supabase SQL Editor

-- 1. Add Image URL
ALTER TABLE daily_posts 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- 2. Add Content Format (default to 'text')
ALTER TABLE daily_posts 
ADD COLUMN IF NOT EXISTS format TEXT DEFAULT 'text' CHECK (format IN ('text', 'markdown', 'json'));

-- 3. Add Tags (Array of Text)
ALTER TABLE daily_posts 
ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';

COMMENT ON COLUMN daily_posts.image_url IS 'Optional header image';
COMMENT ON COLUMN daily_posts.format IS 'Content format: text, markdown, or json';
COMMENT ON COLUMN daily_posts.tags IS 'List of tags/categories';
