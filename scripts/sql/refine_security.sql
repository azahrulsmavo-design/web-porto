-- Secure daily_posts table
-- 1. Reset permissions
ALTER TABLE daily_posts ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing overly broad policies to start fresh
DROP POLICY IF EXISTS "Public can view published posts" ON daily_posts;
DROP POLICY IF EXISTS "Admins can do everything" ON daily_posts;

-- 3. Define Granular Policies

-- A. PUBLIC ACCESS (Read Only)
-- Only allow selecting posts that are published.
CREATE POLICY "Public: View Published Posts"
ON daily_posts FOR SELECT
TO public
USING (status = 'published');

-- B. ADMIN ACCESS (Full Control)
-- This assumes 'authenticated' role is trusted (e.g. only you have an account).
-- For stricter security, you could limit to specific email:
-- USING (auth.jwt() ->> 'email' = 'your-email@example.com')

CREATE POLICY "Admin: View All Posts"
ON daily_posts FOR SELECT
TO authenticated
USING (true); -- Admins can see drafts

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


-- 4. Data Integrity: Auto-update 'updated_at'
-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
DROP TRIGGER IF EXISTS update_daily_posts_updated_at ON daily_posts;
CREATE TRIGGER update_daily_posts_updated_at
    BEFORE UPDATE ON daily_posts
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

-- 5. Comments for Documentation
COMMENT ON TABLE daily_posts IS 'Stores daily articles/quotes for the blog';
COMMENT ON COLUMN daily_posts.status IS 'Visibility status: draft or published';
