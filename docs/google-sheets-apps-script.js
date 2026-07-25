// Paste this into the Google Sheet's Extensions > Apps Script editor.
// See README.md "Enquiry form backend" section for full setup steps.

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.subject || '',
      data.name || '',
      data.company || '',
      data.email || '',
      data.date || '',
      data.event_type || '',
      data.location || '',
      data.phone || '',
      data.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
