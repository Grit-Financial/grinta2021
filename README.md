# AB Corp + Grit Paycard employee landing page

A responsive, bilingual, one-page website for AB Corp employees who currently receive paper paychecks. It explains the Grit Visa Paycard, builds trust in the AB Corp + Grit partnership, introduces eligible MoneyGram transfers, answers common KYC questions and captures employee interest for HR follow-up.

## Package contents

- `index.html` - page structure and content
- `styles.css` - responsive design and print-safe styling
- `script.js` - English/Vietnamese translation, FAQ accordion, validation and form submission
- `config.js` - Google Apps Script endpoint configuration
- `assets/` - AB Corp and Grit logos, Grit website partner assets, MoneyGram/app imagery and the employee flyer
- `google-apps-script/Code.gs` - Google Sheet endpoint
- `google-apps-script/SETUP.md` - step-by-step Google Sheet setup
- `CONTENT-SOURCES.md` - content and compliance notes

## Launch on GitHub Pages

1. Complete the Google Sheet setup in `google-apps-script/SETUP.md`.
2. Paste the deployed Apps Script `/exec` URL into `config.js`.
3. Upload all files and folders to the root of a GitHub repository.
4. In GitHub, open **Settings > Pages**.
5. Set the source to **Deploy from a branch**, select the branch (usually `main`) and the root folder.
6. Save and wait for GitHub Pages to publish the site.

The page does not use a build system or external JavaScript library. All required front-end assets are included locally.

## Before production launch

- Confirm the exact AB Corp HR workflow, ownership and response time.
- Confirm whether an Employee ID should remain optional.
- Have Grit compliance review all card, fee, FDIC, MoneyGram and identity-verification language.
- Confirm the Vietnamese translation with a native Vietnamese reviewer.
- Test the page with employees on mobile devices and at the QR-code destination printed on the flyer.
- Add the final landing-page URL or QR code to future flyer versions.

## Form behavior

Until a valid Apps Script URL is added to `config.js`, the form displays a setup notice and does not claim that a request was submitted.

The form intentionally does not collect financial account details, Social Security numbers or identity documents. Those belong only in Grit's secure enrollment process.
