import { createClient } from '@supabase/supabase-js'
const URL = 'https://yjbcsiejqtjdoaymjtql.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqYmNzaWVqcXRqZG9heW1qdHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNzcwOTcsImV4cCI6MjA0Njk1MzA5N30.koU4QKupfZK278sgpgkScAEBNzksjQjBLzEJmDuGv7Y'
export const supabase = createClient(URL, API_KEY);
