import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function verify() {
    console.log('Testing Supabase connection...');
    const { data, error } = await supabase
        .from('projects')
        .select('slug, title_en, status')
        .limit(3);

    if (error) {
        console.error('❌ Error fetching projects:', error);
        process.exit(1);
    }

    if (data.length === 0) {
        console.warn('⚠️ Connected, but NO projects found. Seed might have failed.');
    } else {
        console.log(`✅ Success! Found ${data.length} projects:`);
        console.table(data);
    }
}

verify();
