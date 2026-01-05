-- Add post_type column to daily_posts table
ALTER TABLE daily_posts 
ADD COLUMN IF NOT EXISTS post_type TEXT DEFAULT 'daily';

-- Add check constraint to ensure valid types
-- We drop existing check if it exists (not easy in standard SQL without logic, so we just add check)
-- Ideally we would: ALTER TABLE daily_posts ADD CONSTRAINT check_post_type CHECK (post_type IN ('daily', 'learn'));
-- But let's keep it simple for now, just text is fine, or update constraint if we want strictness.
-- Let's just default to 'daily' and allow text for flexibility, or we can add a check.
-- User asked for 'learn progress' and 'daily post'.
-- Let's stick to adding the column.

COMMENT ON COLUMN daily_posts.post_type IS 'Type of the post: daily (default) or learn';
