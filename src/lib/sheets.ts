// Forwards form submissions to a Google Apps Script Web App, which appends
// a row to the matching tab in a Google Sheet. See docs/google-sheets-setup.md
// for the Apps Script code and deployment steps. Requires a
// GOOGLE_SHEETS_WEBHOOK_URL env var (set in Netlify site settings).
export async function appendToSheet(sheet: string, fields: Record<string, string>): Promise<void> {
  const url = (import.meta.env.GOOGLE_SHEETS_WEBHOOK_URL ?? process.env.GOOGLE_SHEETS_WEBHOOK_URL ?? '').trim();
  if (!url) throw new Error('GOOGLE_SHEETS_WEBHOOK_URL is not configured.');

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ sheet, ...fields }),
  });
  if (!res.ok) throw new Error(`Sheets webhook responded with ${res.status}`);
}
