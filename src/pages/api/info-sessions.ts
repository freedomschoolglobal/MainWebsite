import type { APIRoute } from 'astro';
import { appendToSheet } from '../../lib/sheets';

// Runs server-side (Netlify function) so the Sheets webhook URL is never exposed.
export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();

  // Honeypot: bots fill every field, humans never see this one.
  if (String(data.get('bot-field') ?? '').trim()) {
    return redirect('/thank-you', 303);
  }

  const session = String(data.get('session') ?? '').trim();
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  if (!session || !name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return redirect('/info-sessions?error=1', 303);
  }

  try {
    await appendToSheet('Info Sessions', {
      Session: session,
      Name: name,
      Email: email,
      'Country / time zone': String(data.get('country') ?? ''),
      'What would you like us to cover?': String(data.get('message') ?? ''),
    });
  } catch {
    return redirect('/info-sessions?error=1', 303);
  }

  return redirect('/thank-you', 303);
};
