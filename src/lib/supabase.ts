
import { createClient } from '@supabase/supabase-js';

// Эти ключи должны быть заменены на реальные ключи из проекта Supabase
// Для продакшена рекомендуется использовать переменные окружения
const supabaseUrl = 'https://szysprgbdamqaeypuact.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6eXNwcmdiZGFtcWFleXB1YWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NDc5NzUsImV4cCI6MjA1ODQyMzk3NX0.mITML1a6Jau9m_XmjMjkXRYjJRIkLoAJlqzjCHKb35A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
