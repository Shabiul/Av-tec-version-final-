# Google Sheets Integration Guide for AV-TEC Enquiries

This document explains how form enquiries submitted through the AV-TEC website are recorded directly in the designated Google Sheet:

**Target Google Sheet**:
[https://docs.google.com/spreadsheets/d/1j3qsVmyAqV6Yo0K85vB_4c2mEAHtlJhjiLFfyUVq-YE/edit](https://docs.google.com/spreadsheets/d/1j3qsVmyAqV6Yo0K85vB_4c2mEAHtlJhjiLFfyUVq-YE/edit)

---

## Step-by-Step Setup (5 Minutes)

### 1. Open Google Sheets & Apps Script
1. Open [Google Sheet `1j3qsVmyAqV6Yo0K85vB_4c2mEAHtlJhjiLFfyUVq-YE`](https://docs.google.com/spreadsheets/d/1j3qsVmyAqV6Yo0K85vB_4c2mEAHtlJhjiLFfyUVq-YE/edit).
2. Click on **Extensions** in the top menu bar → select **Apps Script**.

### 2. Paste the Apps Script Code
Delete any default code in the editor and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Ensure Header Row exists if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Company",
        "Email",
        "Phone",
        "Event Date",
        "Event Type",
        "Location",
        "Message",
        "Subject"
      ]);
    }
    
    // Append the enquiry row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.date || "",
      data.event_type || "",
      data.location || "",
      data.message || "",
      data.subject || "AV-TEC Enquiry"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Deploy as a Web App
1. In Apps Script, click **Deploy** (top right blue button) → **New deployment**.
2. Click the gear icon ⚙️ next to *Select type* → choose **Web app**.
3. Fill in the fields:
   - **Description**: `AV-TEC Website Form Handler`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(Crucial step so website forms can post to it without prompt)*
4. Click **Deploy**.
5. Authorize permissions when prompted by Google.
6. Copy the **Web App URL** (starts with `https://script.google.com/macros/s/...`).

### 4. Connect Web App URL to Next.js `.env.local`
In your website project root, open `.env.local` and paste the URL:

```env
GOOGLE_SHEET_ID=1j3qsVmyAqV6Yo0K85vB_4c2mEAHtlJhjiLFfyUVq-YE
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Every enquiry submitted via the contact form will now automatically append as a formatted row in your Google Sheet!
