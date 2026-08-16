# Connecting the Waitlist / Info Sessions forms to Google Sheets

The `/waitlist` and `/info-sessions` forms POST to `/api/waitlist` and
`/api/info-sessions` (Netlify functions), which forward the entry to a single
Google Apps Script "web app" URL. That script appends a row to the matching
tab in your Google Sheet. One deployment covers both forms.

## 1. Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new sheet — name it e.g. **Freedom School Signups**.
2. Rename the first tab to `Waitlist`. Add a second tab (bottom `+`) named `Info Sessions`.
3. In `Waitlist`, add header row: `Timestamp | Parent / guardian name | Email | Student's age | Country / time zone | Message`
4. In `Info Sessions`, add header row: `Timestamp | Name | Email | Country / time zone | Preferred days / times | What would you like us to cover?`

## 2. Add the script

1. In the sheet, go to **Extensions → Apps Script**.
2. Delete any starter code and paste this in:

```javascript
function doPost(e) {
  var body = JSON.parse(e.postData.contents);
  var sheetName = body.sheet;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Unknown sheet: ' + sheetName }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var row = headers.map(function (h) {
    if (h === 'Timestamp') return new Date();
    return body[h] || '';
  });
  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (disk icon), name the project e.g. "Freedom School Forms".

## 3. Deploy as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → **Web app**.
3. Set **Execute as**: `Me`. Set **Who has access**: `Anyone`.
4. Click **Deploy**. Google will ask you to authorize the script — approve it (it's your own script, acting on your own sheet).
5. Copy the **Web app URL** it gives you (ends in `/exec`).

## 4. Add the URL to Netlify

1. In Netlify: **Site configuration → Environment variables → Add a variable**.
2. Key: `GOOGLE_SHEETS_WEBHOOK_URL`
3. Value: the Web app URL you copied.
4. Redeploy the site (Netlify → Deploys → Trigger deploy) so the function picks it up.

Test by submitting each form once — a new row should appear in the matching tab within a few seconds.

## If you ever change the script

Apps Script requires a **new version** to be deployed for code changes to take effect:
**Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**. The URL stays the same.
