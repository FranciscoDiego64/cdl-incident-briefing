const aiDemo = {
  eyebrow: '05 / AI-ASSISTED DELIVERY',
  title: 'Accelerate with AI',
  lead: 'Turn migration data into actionable intelligence.',
  steps: [
    { number: '01', title: 'Reconcile', detail: 'Compare expected and actual product assignments using deterministic checks.' },
    { number: '02', title: 'Cluster', detail: 'Use AI to group mismatch patterns and highlight anomalies for investigation.' },
    { number: '03', title: 'Prioritise', detail: 'Generate investigation questions and a proposed sequence of work.' },
    { number: '04', title: 'Communicate', detail: 'Draft incident updates from validated findings and confirmed decisions.' },
  ],
  prompt: 'You are supporting a Client Delivery Lead investigating a product migration issue. Review the following aggregated mismatch patterns. Separate confirmed observations from hypotheses. Identify likely investigation paths, the evidence needed to validate them, and a prioritised set of next actions. Do not infer the correct customer tariff or recommend account changes without approved business mapping.',
  guardrail: 'AI accelerates analysis; deterministic checks and accountable people validate decisions. No customer-level personal data is used in this demonstration.',
  speakerNotes: [
    'I would also use AI practically during the investigation, rather than just as a communication tool.',
    'For this case, I would start with a synthetic migration dataset containing expected product assignments, actual migrated product IDs, migration batches and source identifiers.',
    'A deterministic reconciliation process would identify mismatches. I would then use an approved AI tool to analyse the mismatch patterns, group similar errors, suggest likely investigation areas and generate a prioritised checklist.',
    'For example, we might discover that mismatches are concentrated around a particular legacy tariff or transformation batch. That gives the investigation team a faster way to focus its attention.',
    'I would also use AI to summarise validated findings into incident updates and recovery actions.',
    'AI would not decide which product a customer should receive, approve financial corrections or trigger account changes. Those decisions remain with the accountable business and technical owners.',
    'All sensitive information would remain within approved tools and access controls. The objective is to reduce analysis time and improve decision-making while maintaining human accountability.'
  ]
};
export default aiDemo;
