# Connecting the Waitlist / Info Sessions forms to Google Sheets

The `/waitlist` and `/info-sessions` forms POST to `/api/waitlist` and
`/api/info-sessions` (Netlify functions), which forward the entry to a single
Google Apps Script "web app" URL. That script appends a row to the matching
tab in your Google Sheet — creating the tab and its header row automatically
the first time each form is used. One deployment covers both forms.

## 1. The spreadsheet

Already created: **[Freedom School Signups](https://docs.google.com/spreadsheets/d/16AcsibFoHvlDTo6rvFP3h5j2mJl3l9fBycU3dy4uu7E/edit)**
It starts empty — the `Waitlist` and `Info Sessions` tabs appear on their own
the first time someone submits each form, so there's nothing to set up here.

## 2. Add the script

1. Open the spreadsheet above, then go to **Extensions → Apps Script**.
2. Delete any starter code and paste this in:

```javascript
function doPost(e) {
  var body = JSON.parse(e.postData.contents);
  var sheetName = body.sheet;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  var fieldKeys = Object.keys(body).filter(function (k) { return k !== 'sheet'; });

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(['Timestamp'].concat(fieldKeys));
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

Test by submitting each form once — the matching tab should appear (or get a
new row) within a few seconds.

## If you ever change the script

Apps Script requires a **new version** to be deployed for code changes to take effect:
**Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**. The URL stays the same.
