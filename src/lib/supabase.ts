
import { createClient } from '@supabase/supabase-js';

// Эти ключи должны быть заменены на реальные ключи из проекта Supabase
// Для продакшена рекомендуется использовать переменные окружения
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
