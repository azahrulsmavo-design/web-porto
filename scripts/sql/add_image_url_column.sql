-- Migration: Add image_url to daily_posts
ALTER TABLE daily_posts
ADD COLUMN image_url TEXT;

COMMENT ON COLUMN daily_posts.image_url IS 'Optional header image for the article';
