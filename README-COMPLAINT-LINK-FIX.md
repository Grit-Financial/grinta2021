# Complaint Classification link fix

This is an overlay package for the existing `Grit-Financial/grinta2021` repository.
It does not replace or delete the other project pages.

## What the package changes

- Replaces `complaint-classification.html` with a top-level redirect to the complete canonical report. The previous file used an iframe, which could display a nested 404 or fail to render the report.
- Adds `complaint-classification/index.html` so the pretty route `/grinta2021/complaint-classification/` also works.
- Adds `404.html` with a targeted recovery rule for both Complaint Classification URL variants.
- Adds `.nojekyll` so GitHub Pages publishes the static files directly.
- Includes the two Grit logo assets used by the recovery pages.

## Upload steps

1. Extract the ZIP.
2. Open the `Grit-Financial/grinta2021` repository.
3. Choose **Add file > Upload files**.
4. Upload the contents of this folder to the repository root. Do not upload the ZIP as a single file.
5. Allow GitHub to replace `complaint-classification.html` and commit the changes to `main`.
6. Open **Actions** and wait for **pages build and deployment** to finish successfully.
7. Test:
   - `https://grit-financial.github.io/grinta2021/complaint-classification.html`
   - `https://grit-financial.github.io/grinta2021/complaint-classification/`

The existing root `index.html` can remain unchanged because it already links to `complaint-classification.html`.
