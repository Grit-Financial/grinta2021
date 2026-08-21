# Bulk Enrollment Customer Journey - Technical Flow

## Brief overview

This step-by-step journey describes the bulk employee onboarding flow from import to card delivery tracking. It outlines validations, business rules, integrations, and outcomes at each phase.

## Step 1 - Import & Initial Review

- Import methods: Employee screen interface or `.xlsx` upload.
- System loads rows into a draft for validation and review.

## Step 2 - Validation & Verification

- Rules Engine validation:
  - Find duplicates - detect across SSN, Email/Phone, and Date of Birth.
  - Names: check formatting only; no identity validation occurs at this stage.
  - Addresses: format validation, including the legacy ZIP code format limitation for Corecard integration.
  - Delivery options:
    - **Onsite:** Anonymized cards; always delivered to the office.
    - **Home:** Personalized cards delivered to the employee's home; home address required.
    - **Office:** Personalized cards delivered to the office; each employee's home address is also required.
  - Re-onboarding prevention: block already-onboarded employees and users who started via the standard flow or a marketing link.
  - PII: SSN4 plus Date of Birth must be unique per employee.
  - Mandatory fields are enforced based on the selected delivery option.
  - Proxy and Card Last 4 must be numeric.
  - International phone numbers are supported for Fortuna only.

## Step 3 - Draft & Watchlist

- The UI presents validation results with pass/fail reasons.
- The administrator selects employees to proceed or resolves issues.
- Unresolved items remain on the watchlist.

## Step 4 - Direct Deposit Configuration

- Access: Tenant Admins and Company Admins only.
- Options:
  - **No:** Do not switch Direct Deposit. This is the default.
  - **Yes:** Switch immediately at onboarding.
  - **Deferred:** Switch on the assigned date or the next pay cycle after that date.

## Step 5 - Summary & Submission

- Downloadable `.xlsx` of the final employee list for sign-off.
- Submit to start processing.

## Step 6 - Account Creation & Processing

1. Log an event per submission.
2. Create User and Employer records used by Better Auth.
3. Run KYC via Persona and Sentilink.
4. Verify employment via Prism/Asure. On failure, mark the employee as Pre-hire in the Employer table.
5. Create the Corecard account:
   - When the list contains Proxy number plus Card Last 4, update card and PII, store KIT ID in the User table, and send to Corecard using the Onsite path.
   - When the list has no Proxy number, request a new personalized card.
6. Send delivery instructions to Corecard for Office or Home delivery.
7. Mark the user as **ONBOARDED** in the database.
8. Apply the Direct Deposit switch:
   - If employment is verified, apply the selected option.
   - If the employee is Pre-hire, do not switch Direct Deposit.
9. Log individual events per employee.
10. Store failures in the database for a future Employer dashboard view.
11. Send onboarding and invitation emails.
12. Send SMS when email is missing.

## Phase 7 - Card Delivery & Tracking

- Onsite Card requests are coordinated by Ajiitesh and maintained on a Google Doc. Iteration 2 moves this into the database and adds a similar request form to the Employer portal.
- The User table stores delivery data.
- The USPS tracker table stores shipment tracking.

## Notes

### Recently Onboarded Table

- Shows all onboarding types and persists over time.

### Technical integrations involved with the flow

- Better Auth
- Persona
- Sentilink
- Prism / Asure
- Corecard
- USPS tracking

## Iteration 2 of development

- Improve the rules engine to prevent users ages 0-15 from onboarding.
- Add a downloadable parent consent form for users ages 16-18 that employers can distribute offline.
- Deprecate the Recently Onboarded Users table.
- Identify ONBOARDED users who remain stuck in the flow and therefore have not enrolled for Earned Wage Access.
- Create an Onsite Card Request form in the Admin Portal and move the current operational data from the spreadsheet into the database.
