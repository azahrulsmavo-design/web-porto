-- ==========================================
-- DAILY POSTS SETUP SCRIPT (Consolidated)
-- Run this in Supabase SQL Editor to fix 404 Errors
-- ==========================================

-- 1. Create the Table (if not exists)
CREATE TABLE IF NOT EXISTS daily_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE,
  
  slug TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author TEXT DEFAULT 'Azahrul',
  
  -- Content (Bilingual)
  title_en TEXT NOT NULL,
  content_en TEXT, 
  title_id TEXT,
  content_id TEXT
);

-- 2. Configure Security (RLS)
ALTER TABLE daily_posts ENABLE ROW LEVEL SECURITY;

-- Reset existing policies to ensure clean state
DROP POLICY IF EXISTS "Public can view published posts" ON daily_posts;
DROP POLICY IF EXISTS "Admins can do everything" ON daily_posts;
DROP POLICY IF EXISTS "Public: View Published Posts" ON daily_posts;
DROP POLICY IF EXISTS "Admin: View All Posts" ON daily_posts;
DROP POLICY IF EXISTS "Admin: Insert Posts" ON daily_posts;
DROP POLICY IF EXISTS "Admin: Update Posts" ON daily_posts;
DROP POLICY IF EXISTS "Admin: Delete Posts" ON daily_posts;

-- Create New Policies
-- A. PUBLIC: Read-only for Published posts
CREATE POLICY "Public: View Published Posts"
ON daily_posts FOR SELECT
TO public
USING (status = 'published');

-- B. ADMIN: Full access for Authenticated users
CREATE POLICY "Admin: View All Posts"
ON daily_posts FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admin: Insert Posts"
ON daily_posts FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Admin: Update Posts"
ON daily_posts FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Admin: Delete Posts"
ON daily_posts FOR DELETE
TO authenticated
USING (true);

-- 3. Configure Auto-Timestamp Trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_daily_posts_updated_at ON daily_posts;
CREATE TRIGGER update_daily_posts_updated_at
    BEFORE UPDATE ON daily_posts
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

-- 4. Initial Seed Data (Optional - so you see something immediately)
INSERT INTO daily_posts (slug, status, title_en, content_en, title_id, content_id, published_at, author)
VALUES 
(
    'welcome-to-daily-reads', 
    'published', 
    'Welcome to Daily Reads', 
    'This is the first article in the new Daily Reads section. It is fetched securely from Supabase.', 
    'Selamat Datang di Jurnal Harian', 
    'Ini adalah artikel pertama di bagian Jurnal Harian baru. Data ini diambil secara aman dari Supabase.',
    NOW(),
    'System'
)
ON CONFLICT (slug) DO NOTHING;

COMMENT ON TABLE daily_posts IS 'Stores daily articles/quotes for the blog';
