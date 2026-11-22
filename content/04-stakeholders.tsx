const stakeholders = {
  eyebrow: '04 / COLLABORATION',
  title: 'Align people and ownership',
  lead: 'One incident. Three organisations. Clear accountability.',
  workstreams: [
    { name: 'Commercial correctness', owner: 'United Energy Commercials Domain Owner', partners: 'Kraken Commercials CDL', outcome: 'Approved intended product definitions and correction mapping.' },
    { name: 'Migration integrity', owner: 'United Energy Migration Lead', partners: 'SI · United Energy Technical Lead · Kraken technical specialists', outcome: 'Source-to-target mapping and migration execution understood and corrected.' },
    { name: 'Billing and customer impact', owner: 'United Energy Billing & Payments Domain Owner', partners: 'Kraken Billing CDL · Customer Service · Comms', outcome: 'Billing exposure assessed and customer-facing response coordinated.' },
  ],
  oversight: 'Transformation Director: programme-level oversight, prioritisation and escalation across workstreams.',
  role: 'My role: orchestrate, challenge, prioritise, connect teams and drive resolution.',
  impacts: [
    { name: 'Billing & Payments', detail: 'Incorrect charges, reversals, reissued bills and payment reconciliation.' },
    { name: 'Customer Service & Comms', detail: 'Contact volumes, agent guidance, complaints and customer messaging.' },
    { name: 'Customer Journeys', detail: 'Consistency of customer account information and downstream journeys.' },
    { name: 'Industry processes', detail: 'Potential downstream supply, market-process and data inconsistencies.' },
    { name: 'Migration programme', detail: 'Subsequent cohorts, shared mappings and programme dependencies.' },
  ],
  /*
  speakerNotes: [
    'This cannot be treated as a Commercials issue in isolation.',
    'United Energy needs to own its intended commercial product definitions and approve the correct outcome. The SI needs to investigate the extraction and transformation pipeline. Kraken needs to investigate platform configuration, migration behaviour and any relevant platform issues.',
    'I would work closely with the Commercials Domain Owner, Migration Lead and Technical Lead, while involving the Billing CDL and relevant client domain owners.',
    'The Transformation Director should provide programme-level oversight and help resolve decisions or dependencies that cannot be settled within individual workstreams.',
    'I would also assess the wider impact, particularly billing, payments, customer service, communications, customer journeys and industry processes.',
    'My role is to bring these parties together, maintain one shared understanding, make dependencies visible and ensure every action has a clear owner.',
    'Shared resolution does not mean ambiguous accountability.'
  ],
  */
};
export default stakeholders;
