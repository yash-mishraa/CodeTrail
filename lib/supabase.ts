import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Initialize the default Supabase client (Anon only)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Initialize a secure Supabase client with the Clerk JWT
export const getSupabaseClient = (supabaseAccessToken: string) => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });
};
