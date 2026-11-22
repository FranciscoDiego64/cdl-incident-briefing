# United Energy — Product Migration Incident Briefing

A small Next.js / TypeScript executive briefing application for the Kraken Senior Client Delivery Lead case study.

## Run locally

Requirements: Node.js 18.17+ (Node 20 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a new GitHub repository and push this project.
2. In Vercel, select **Add New → Project** and import the repository.
3. Keep the detected framework as Next.js and deploy. No environment variables are required.

Alternatively, install the Vercel CLI and run `vercel` from this directory.

## Editing the presentation content

All presentation copy and speaker notes are separate from the UI in `content/`:

- `01-overview.tsx`
- `02-investigation.tsx`
- `03-recovery.tsx`
- `04-stakeholders.tsx`
- `05-ai-demo.tsx`
- `06-close.tsx`

Edit the exported objects in those files to change headlines, copy, labels or speaker notes. The components in `components/BriefingApp.tsx` control presentation and layout.

## AI demonstration — important distinction

The embedded prototype runs deterministic reconciliation against 100 fictional records. It demonstrates how expected and actual product IDs can be compared and mismatch patterns surfaced. The **Copy AI prompt** action prepares a prompt and aggregated findings for use in an approved AI tool. It does not call an external LLM, and the displayed analysis should not be described as a live AI-generated result.

The dataset is synthetic and deliberately includes 20 exceptions: 12 mapping mismatches, 5 source-data exceptions and 3 unexpected identifiers. These are illustrative prototype values, not facts from the fictional incident.

## Notes

- No database, authentication or API keys are required.
- The print action can be used to create a PDF from the browser.
- The scenario and incident figures are fictional, as specified in the case study.
