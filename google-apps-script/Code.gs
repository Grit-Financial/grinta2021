/**
 * AB Corp + Grit Paycard interest form endpoint.
 *
 * Recommended setup: create this script from Extensions > Apps Script inside
 * the Google Sheet that AB Corp HR will use. Deploy it as a Web App and paste
 * the /exec URL into config.js in the website package.
 */

const SHEET_NAME = 'Paycard Interest';
const HEADERS = [
  'Received at',
  'Full name',
  'Employee ID',
  'Mobile phone',
  'Preferred language',
  'Best contact time',
  'Consent',
  'Page language',
  'Client submitted at',
  'Source URL',
  'UTM source',
  'UTM medium',
  'UTM campaign',
  'UTM content'
];

function doGet() {
  return jsonResponse_({
    ok: true,
    service: 'AB Corp Paycard interest form',
    message: 'Endpoint is active.'
  });
}

function doPost(e) {
  let requestId = '';

  try {
    const data = parseRequest_(e);
    requestId = clean_(data.requestId, 80);

    // Honeypot: return success without writing spam to the sheet.
    if (clean_(data.website, 200)) {
      return htmlResponse_({ ok: true, requestId: requestId });
    }

    const fullName = clean_(data.fullName, 120);
    const employeeId = clean_(data.employeeId, 40);
    const mobilePhone = clean_(data.mobilePhone, 25);
    const preferredLanguage = clean_(data.preferredLanguage, 30);
    const bestTime = clean_(data.bestTime, 30);
    const contactConsent = clean_(data.contactConsent, 10);

    if (!fullName || !mobilePhone || !preferredLanguage || !bestTime || contactConsent !== 'Yes') {
      return htmlResponse_({
        ok: false,
        requestId: requestId,
        error: 'Missing or invalid required fields.'
      });
    }

    const digitCount = mobilePhone.replace(/\D/g, '').length;
    if (digitCount < 7 || digitCount > 15) {
      return htmlResponse_({
        ok: false,
        requestId: requestId,
        error: 'Invalid phone number.'
      });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      if (!spreadsheet) throw new Error('This script must be bound to a Google Sheet.');

      let sheet = spreadsheet.getSheetByName(SHEET_NAME);
      if (!sheet) {
        sheet = spreadsheet.insertSheet(SHEET_NAME);
      }

      ensureHeaders_(sheet);

      sheet.appendRow([
        new Date(),
        safeCell_(fullName),
        safeCell_(employeeId),
        safeCell_(mobilePhone),
        safeCell_(preferredLanguage),
        safeCell_(bestTime),
        safeCell_(contactConsent),
        safeCell_(clean_(data.pageLanguage, 30)),
        safeCell_(clean_(data.submittedAtClient, 50)),
        safeCell_(clean_(data.sourceUrl, 500)),
        safeCell_(clean_(data.utmSource, 100)),
        safeCell_(clean_(data.utmMedium, 100)),
        safeCell_(clean_(data.utmCampaign, 150)),
        safeCell_(clean_(data.utmContent, 150))
      ]);

      const lastRow = sheet.getLastRow();
      sheet.getRange(lastRow, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    } finally {
      lock.releaseLock();
    }

    return htmlResponse_({ ok: true, requestId: requestId });
  } catch (error) {
    console.error(error);
    return htmlResponse_({
      ok: false,
      requestId: requestId,
      error: 'Unable to record submission.'
    });
  }
}

function parseRequest_(e) {
  if (!e) return {};

  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (error) {
      // Fall through to standard form parameters.
    }
  }

  return e.parameter || {};
}

function ensureHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const isEmpty = firstRow.every(function(value) { return !value; });

  if (sheet.getLastRow() === 0 || isEmpty) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setBackground('#111116')
      .setFontColor('#ffffff')
      .setFontWeight('bold')
      .setWrap(true);
    sheet.setColumnWidth(1, 155);
    sheet.setColumnWidth(2, 190);
    sheet.setColumnWidth(3, 110);
    sheet.setColumnWidth(4, 140);
    sheet.setColumnWidth(5, 135);
    sheet.setColumnWidth(6, 135);
    sheet.setColumnWidth(7, 90);
    sheet.setColumnWidth(8, 115);
    sheet.setColumnWidth(9, 180);
    sheet.setColumnWidth(10, 260);
  }
}

function clean_(value, maxLength) {
  const text = value == null ? '' : String(value).trim();
  return text.substring(0, maxLength || 500);
}

function safeCell_(value) {
  const text = value == null ? '' : String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}


function htmlResponse_(payload) {
  const message = Object.assign({ source: 'abcorp-paycard-form' }, payload || {});
  const serialized = JSON.stringify(message).replace(/</g, '\\u003c');
  const html = '<!doctype html><html><head><meta charset="utf-8"></head><body>' +
    '<script>window.parent.postMessage(' + serialized + ', "*");<\/script>' +
    '</body></html>';

  return HtmlService
    .createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
