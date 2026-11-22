const recovery = {
  eyebrow: '03 / SOLUTION & RECOVERY',
  title: 'Drive the right solution',
  lead: 'Correct the accounts. Reconcile the money. Verify the outcome.',
  gates: [
    { number: '01', name: 'Validate', description: 'Agree the correct product mapping with the accountable business owner.', evidence: 'Approved mapping and effective dates' },
    { number: '02', name: 'Test', description: 'Validate a representative correction sample before wider execution.', evidence: 'Business and technical sign-off' },
    { number: '03', name: 'Execute', description: 'Run a controlled bulk correction with an auditable trail and exception handling.', evidence: 'Execution log and exception list' },
    { number: '04', name: 'Reconcile', description: 'Verify account assignments and assess all affected billing periods.', evidence: 'Reconciled accounts and billing outcomes' },
  ],
  routes: [
    { label: 'Configuration issue', route: 'Correct product configuration and validate commercial definitions.' },
    { label: 'Data / integration issue', route: 'Resolve source data or SI transformation and add validation.' },
    { label: 'Platform capability gap', route: 'Bring evidence and business value to Product and Engineering.' },
  ],
  callout: 'Changing a product definition is not the same as correcting every customer account assigned to it.',
  speakerNotes: [
    'Once we understand the root cause, I would agree the appropriate solution with the accountable business and technical owners.',
    'My starting point would always be to use existing Kraken functionality wherever possible.',
    'If the issue is incorrect product configuration, we address the configuration and validate the intended commercial outcome. If the SI mapping is responsible, the transformation logic and its validation need to be corrected.',
    'If we identify a genuine platform capability gap, I would bring the evidence, customer impact and business requirement to Kraken’s Product and Engineering teams to assess the appropriate solution. I would avoid jumping straight to custom development.',
    'For recovery, I would establish four gates: validate the correct mapping, test a representative sample, execute the bulk correction with an audit trail, and reconcile the results.',
    'We also need to assess the billing impact. Where incorrect products have already affected billed periods, charges must be reversed and bills reissued.',
    'Kraken’s bulk correction and workflow reprocessing capabilities can support this process.',
    'I would not consider the incident resolved just because the correction job completed. We need evidence that customer accounts and commercial outcomes are correct.'
  ]
};
export default recovery;
