import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    if (import.meta.env.DEV) {
        console.warn('⚠️ Missing Supabase environment variables. Check .env file.');
        console.warn('Required: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY');
    }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
