# Connect the landing-page form to Google Sheets

The website is already configured to submit to a Google Apps Script Web App. Complete these steps before publishing the page.

## 1. Create the HR response sheet

1. Create a new Google Sheet owned by the AB Corp HR team.
2. Give it a clear name, such as **AB Corp - Grit Paycard Interest**.
3. Keep the Sheet private and share it only with authorized HR staff.

## 2. Add the Apps Script

1. In the Sheet, open **Extensions > Apps Script**.
2. Delete the sample function in the editor.
3. Copy the contents of `Code.gs` from this package into the editor.
4. Save the project. A tab named **Paycard Interest** will be created after the first valid submission.

## 3. Deploy it as a Web App

1. Select **Deploy > New deployment**.
2. Choose **Web app** as the deployment type.
3. Set **Execute as** to **Me** (the HR owner of the Sheet).
4. Set **Who has access** to **Anyone**. The endpoint must accept form posts from the public landing page.
5. Select **Deploy**, complete Google's authorization prompts, and copy the Web App URL ending in `/exec`.

## 4. Connect the page

Open `config.js` in the website package and replace:

```js
formEndpoint: "PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
```

with the deployed `/exec` URL, for example:

```js
formEndpoint: "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec"
```

## 5. Test before launch

1. Open the landing page from its final GitHub Pages URL.
2. Submit one test response in English and one in Vietnamese.
3. Confirm both rows appear in the **Paycard Interest** tab.
4. Confirm required fields, consent, phone validation and the success message work on desktop and mobile.
5. Delete the test rows before launch.

## Security and privacy checklist

- Do not ask for Social Security numbers, bank account details, passwords or identity documents on this interest form.
- Restrict Google Sheet access to authorized AB Corp HR staff.
- Turn on two-step verification for every Google account with access to the Sheet.
- Establish a retention period for the contact requests and delete records when they are no longer needed.
- Do not publish the Sheet or share it using “Anyone with the link.” Only the Web App endpoint should be public.
- Review the form and privacy language with AB Corp HR, legal and compliance teams before production use.

## Updating the script later

After changing `Code.gs`, open **Deploy > Manage deployments**, edit the existing deployment, choose **New version**, and deploy. The existing `/exec` URL can remain the same.
