import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lifjztbwpehewkxxvgcg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZmp6dGJ3cGVoZXdreHh2Z2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MzM5ODAsImV4cCI6MjAzNzUwOTk4MH0.eaaVMVemeByMBQjfZ7ygYKUvEwvgRk_pheeqsjKsNt0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
