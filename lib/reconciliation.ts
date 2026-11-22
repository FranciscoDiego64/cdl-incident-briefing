import records, { MigrationRecord } from '@/data/migration-sample';

export type ReconciliationResult = {
  total: number;
  mismatches: number;
  matched: number;
  patterns: { key: MigrationRecord['issue']; label: string; count: number; description: string }[];
  byBatch: { batch: string; count: number }[];
  records: MigrationRecord[];
};

export function reconcileMigrations(): ReconciliationResult {
  const mismatches = records.filter((record) => record.issue !== 'none');
  const definitions = [
    { key: 'mapping' as const, label: 'Product mapping mismatch', description: 'Expected and actual product IDs differ; inspect SI source-to-target mapping and batch rules.' },
    { key: 'source' as const, label: 'Source data exception', description: 'Source product value is unexpected; validate the legacy record and approved commercial mapping.' },
    { key: 'identifier' as const, label: 'Unexpected product identifier', description: 'Actual product identifier is not recognised; inspect payload generation and target product references.' },
  ];
  const patterns = definitions.map((definition) => ({ ...definition, count: records.filter((record) => record.issue === definition.key).length }));
  const byBatch = ['BATCH-A', 'BATCH-B', 'BATCH-C'].map((batch) => ({ batch, count: mismatches.filter((record) => record.batch === batch).length }));
  return { total: records.length, mismatches: mismatches.length, matched: records.length - mismatches.length, patterns, byBatch, records: mismatches };
}
