
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  category: string;
  message: string;
}

export async function submitContact(data: ContactFormData) {
  // Save to database
  const { error } = await supabase
    .from('contacts')
    .insert([data]);

  if (error) {
    throw error;
  }

  // Send email notification
  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.error('Failed to send notification email');
    }
  } catch (emailError) {
    console.error('Email notification error:', emailError);
  }
}
