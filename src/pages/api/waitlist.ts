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

  const parentName = String(data.get('parent-name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  if (!parentName || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return redirect('/waitlist?error=1', 303);
  }

  try {
    await appendToSheet('Waitlist', {
      'Parent / guardian name': parentName,
      Email: email,
      "Student's age": String(data.get('student-age') ?? ''),
      'Country / time zone': String(data.get('country') ?? ''),
      Message: String(data.get('message') ?? ''),
    });
  } catch {
    return redirect('/waitlist?error=1', 303);
  }

  return redirect('/thank-you', 303);
};
