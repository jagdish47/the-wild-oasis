import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lcppbmnvdgfpgcymwzqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcHBibW52ZGdmcGdjeW13enF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2NDMwOTksImV4cCI6MjAwOTIxOTA5OX0.xHsdmna3HbDEo3bty8h0a94AbHQzw31xq1NoIAqJRNc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
