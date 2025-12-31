-- Create daily_posts table
CREATE TABLE daily_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE,
  
  slug TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author TEXT DEFAULT 'Azahrul',
  
  -- Content (Bilingual)
  title_en TEXT NOT NULL,
  content_en TEXT, -- HTML or Markdown content
  
  title_id TEXT,
  content_id TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE daily_posts ENABLE ROW LEVEL SECURITY;

-- Create Policy: Public can read published posts
CREATE POLICY "Public can view published posts" 
ON daily_posts FOR SELECT 
USING (status = 'published');

-- Create Policy: Authenticated users (Admin) can do everything
CREATE POLICY "Admins can do everything" 
ON daily_posts FOR ALL 
USING (auth.role() = 'authenticated');
