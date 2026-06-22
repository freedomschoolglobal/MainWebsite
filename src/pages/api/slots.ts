import type { APIRoute } from 'astro';
import { site } from '../../data/site';

// Runs server-side (Netlify function) so the Cal.com key is never exposed.
export const prerender = false;

const CAL = 'https://api.cal.com/v2';
const json = (obj: unknown, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });

export const GET: APIRoute = async ({ url }) => {
  const key = import.meta.env.CAL_API_KEY ?? process.env.CAL_API_KEY;
  if (!key) return json({ error: 'Booking is not configured yet.' }, 500);

  const start = url.searchParams.get('start');
  const end = url.searchParams.get('end');
  const timeZone = url.searchParams.get('timeZone') || 'UTC';
  if (!start || !end) return json({ error: 'Missing date range.' }, 400);

  const q = new URLSearchParams({
    eventTypeId: String(site.cal.eventTypeId),
    start,
    end,
    timeZone,
  });

  try {
    const res = await fetch(`${CAL}/slots?${q}`, {
      headers: { Authorization: `Bearer ${key}`, 'cal-api-version': '2024-09-04' },
    });
    const data = await res.json();
    if (!res.ok) return json({ error: 'Could not load available times.' }, 502);
    return json({ slots: data.data ?? {} });
  } catch {
    return json({ error: 'Could not reach the booking service.' }, 502);
  }
};
