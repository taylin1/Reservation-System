
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables! Ensure SUPABASE_URL and SUPABASE_ANON_KEY are set in your Render dashboard Environment tab (or in backend/.env for local dev)."
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
