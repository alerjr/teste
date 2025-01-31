// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ycrqfickumgahrhbqevo.supabase.co'; // Substitua pelo URL do seu projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcnFmaWNrdW1nYWhyaGJxZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNjYyMjAsImV4cCI6MjA1Mzk0MjIyMH0.wwDY31H_ktTUpiRA2WkFWYA6e_T08WPIAvUFnpy-Xx8'; // Substitua pela chave pública de seu projeto
export const supabase = createClient(supabaseUrl, supabaseKey);
