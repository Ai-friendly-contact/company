
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SiteSettings {
  id: string;
  key: string;
  value: string;
  category: string;
  description: string;
  updated_at?: string;
}

export async function getSiteSettings(): Promise<SiteSettings[]> {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .order('category', { ascending: true });

  if (error) {
    console.error('Error fetching settings:', error);
    return [];
  }

  return data || [];
}

export async function updateSiteSettings(key: string, value: string): Promise<boolean> {
  const { error } = await supabase
    .from('site_settings')
    .update({ value, updated_at: new Date().toISOString() })
    .eq('key', key);

  if (error) {
    console.error('Error updating setting:', error);
    return false;
  }

  return true;
}

export async function getSiteSettingValue(key: string, defaultValue: string = ''): Promise<string> {
  const { data, error } = await supabase
    .from('site_settings')
    .select('value')
    .eq('key', key)
    .single();

  if (error || !data) {
    return defaultValue;
  }

  return data.value || defaultValue;
}
