import type { APIRoute } from 'astro';
import { site } from '../../data/site';

// Runs server-side (Netlify function) so the Cal.com key is never exposed.
export const prerender = false;

const CAL = 'https://api.cal.com/v2';
const json = (obj: unknown, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const key = import.meta.env.CAL_API_KEY ?? process.env.CAL_API_KEY;
  if (!key) return json({ error: 'Booking is not configured yet.' }, 500);

  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  const { start, name, email, timeZone, notes } = body ?? {};
  if (!start || !name || !email || !timeZone) {
    return json({ error: 'Please fill in your name, email and pick a time.' }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email))) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }

  const payload: any = {
    start,
    eventTypeId: site.cal.eventTypeId,
    attendee: {
      name: String(name).trim(),
      email: String(email).trim(),
      timeZone,
      language: 'en',
    },
  };
  if (notes && String(notes).trim()) {
    payload.bookingFieldsResponses = { notes: String(notes).trim() };
  }

  try {
    const res = await fetch(`${CAL}/bookings`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'cal-api-version': '2024-08-13',
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data?.error?.message || 'That slot may have just been taken — please choose another time.';
      return json({ error: msg }, 502);
    }
    return json({ ok: true, start: data?.data?.start ?? start, uid: data?.data?.uid });
  } catch {
    return json({ error: 'Could not reach the booking service. Please try again.' }, 502);
  }
};
