import { serve } from "https://deno.land/std@0.208.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Check if RESEND_API_KEY is available
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
          status: 500 
        }
      )
    }

    const { name, email, phone, company, category, message } = await req.json()
    
    console.log('Sending email to ai.friendly.contact@gmail.com')
    
    // Send email notification
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'noreply@readdy.ai',
        to: ['ai.friendly.contact@gmail.com'],
        subject: `新しいお問い合わせ: ${category}`,
        html: `
          <h2>新しいお問い合わせが届きました</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>お問い合わせ詳細</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #dee2e6;">
                <td style="padding: 10px; font-weight: bold; width: 120px;">お名前:</td>
                <td style="padding: 10px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #dee2e6;">
                <td style="padding: 10px; font-weight: bold;">メールアドレス:</td>
                <td style="padding: 10px;">${email}</td>
              </tr>
              ${phone ? `
              <tr style="border-bottom: 1px solid #dee2e6;">
                <td style="padding: 10px; font-weight: bold;">電話番号:</td>
                <td style="padding: 10px;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr style="border-bottom: 1px solid #dee2e6;">
                <td style="padding: 10px; font-weight: bold;">会社名:</td>
                <td style="padding: 10px;">${company}</td>
              </tr>
              ` : ''}
              <tr style="border-bottom: 1px solid #dee2e6;">
                <td style="padding: 10px; font-weight: bold;">問い合わせ種別:</td>
                <td style="padding: 10px;">${category}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; vertical-align: top;">お問い合わせ内容:</td>
                <td style="padding: 10px; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <p style="color: #856404; margin: 0; font-weight: bold;">
              ⚠️ これは自動送信メールです。このメールには返信しないでください。
            </p>
            <p style="color: #856404; margin: 5px 0 0 0; font-size: 14px;">
              お客様への返信は、直接 ${email} までお願いします。
            </p>
          </div>
        `
      })
    })

    const emailResult = await emailRes.json()
    console.log('Email API Response:', emailResult)

    if (!emailRes.ok) {
      console.error('Email API Error:', emailResult)
      throw new Error(`Failed to send email: ${emailResult.message || 'Unknown error'}`)
    }

    console.log('Email sent successfully')

    return new Response(
      JSON.stringify({ success: true, emailId: emailResult.id }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 400 
      }
    )
  }
})