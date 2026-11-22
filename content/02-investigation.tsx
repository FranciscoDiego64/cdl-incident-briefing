const investigation = {
  eyebrow: '02 / INVESTIGATION',
  title: 'Understand the problem',
  lead: 'A technically valid API payload does not guarantee a commercially correct outcome.',
  stages: [
    { name: 'Legacy source data', question: 'Was the original customer product correct?', detail: 'Check the source tariff, customer record and effective dates.' },
    { name: 'SI transformation', question: 'Was the source-to-target mapping correct?', detail: 'Inspect transformation rules, mapping tables and batch-level patterns.' },
    { name: 'Kraken configuration', question: 'Were target products correctly configured and approved?', detail: 'Compare product identifiers and commercial definitions against the approved catalogue.' },
    { name: 'Migration execution', question: 'Did the payload assign the intended product?', detail: 'Compare payload values with the resulting customer account assignment.' },
  ],
  outputs: ['Confirmed affected population', 'Root cause and contributing factors', 'Correct product mapping', 'Billing exposure assessment', 'Agreed remediation strategy'],
  /*
  speakerNotes: [
    'The first thing I would do is trace the product assignment end to end.',
    'We know the SI generates the migration payload, containing customer, supply and product information. We also know that Kraken validates payload structure and mandatory fields, but does not automatically validate commercial logic.',
    'That distinction is important. An API request can be technically valid while still assigning the wrong commercial product.',
    'I would investigate four areas: whether the original legacy data was correct; whether the SI transformation translated it into the correct Kraken product identifier; whether the target products were correctly configured and approved; and whether the actual payload and resulting account match the intended commercial outcome.',
    'I would compare expected and actual product assignments, identify patterns across migration batches and establish the precise failure point.',
    'I would distinguish the direct root cause from contributing factors. An incorrect mapping might be the direct cause, while the absence of a commercial validation control allowed it to pass undetected.',
    'The objective is to establish facts, not to find someone to blame.'
  ],
  */
};
export default investigation;
