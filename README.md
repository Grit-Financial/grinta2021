# Grit Financial Project Directory

This package restores the Grit-branded project index and moves the current AB Corp + Grit Paycard landing page to its own root-level project page.

## Project URLs after deployment

- `/index.html` — central project directory
- `/paycard-landing-page.html` — AB Corp + Grit Paycard landing page
- `/bulk-enrollment.html` — Bulk Enrollment Technical Journey
- `/complaint-classification.html` — Complaint Classification Report
- `/instant-wage-transfer.html` — Instant Wage Transfer Usability Study

## Upload this package as an overlay

1. Extract the ZIP on your computer.
2. Open the `Grit-Financial/grinta2021` repository in GitHub.
3. Choose **Add file → Upload files**.
4. Upload every file and the `assets` folder from the extracted package to the repository root.
5. Allow GitHub to replace matching files such as `index.html`, `style.css`, `README.md`, and the existing project pages.
6. Commit the update to `main`.

## Important: keep the existing Paycard support files

The Paycard project continues to use the support files and media that are already in the repository. Upload this package over the existing repository; do not first delete the repository contents.

Keep these existing root files:

- `styles.css`
- `script.js`
- `config.js`
- `CONTENT-SOURCES.md`
- `google-apps-script/`

Keep these existing files in `assets/`:

- `abcorp-grit-paycard-flyer.pdf`
- `abcorp-logo.png`
- `abcorp-paycard-preview.webp`
- `app-moneygram-phone.png`
- `cfsb-logo.png`
- `favicon.png`
- `grit-logo.png`
- `moneygram-logo.png`
- `pci-logo.png`
- `soc-logo.png`
- `visa-logo.png`

GitHub's normal file-upload workflow replaces files with matching names but does not remove the other files listed above.

## GitHub Pages

In **Settings → Pages**, publish from the `main` branch and the repository root. The included `.nojekyll` file prevents Jekyll processing.
