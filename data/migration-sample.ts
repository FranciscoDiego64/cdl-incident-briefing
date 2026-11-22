export type MigrationRecord = {
  id: string;
  batch: string;
  sourceProduct: string;
  expectedProduct: string;
  actualProduct: string;
  issue: 'mapping' | 'source' | 'identifier' | 'none';
};

// Fictional records for a presentation prototype. Not representative of actual incident data.
const records: MigrationRecord[] = Array.from({ length: 100 }, (_, index) => {
  const n = index + 1;
  const batch = n <= 35 ? 'BATCH-A' : n <= 70 ? 'BATCH-B' : 'BATCH-C';
  const expected = n % 3 === 0 ? 'TARIFF-GREEN' : n % 3 === 1 ? 'TARIFF-FIXED' : 'TARIFF-FLEX';
  let actual = expected;
  let issue: MigrationRecord['issue'] = 'none';
  let source = expected;
  if (n <= 12) {
    actual = n % 2 === 0 ? 'TARIFF-FLEX' : 'TARIFF-FIXED';
    issue = 'mapping';
  } else if (n <= 17) {
    source = 'UNKNOWN-LEGACY';
    issue = 'source';
  } else if (n <= 20) {
    actual = 'UNKNOWN-ID';
    issue = 'identifier';
  }
  return { id: `UE-${String(n).padStart(4, '0')}`, batch, sourceProduct: source, expectedProduct: expected, actualProduct: actual, issue };
});
export default records;
