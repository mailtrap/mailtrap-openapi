#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'specs');
const outDir = join(root, 'specs-eu');

const rules = [
  [/\b(send|bulk|sandbox)\.api\.mailtrap\.io\b/g, '$1.api.eu.mailtrap.io'],
  [/https:\/\/mailtrap\.io(?!\/(?:wp-content|terms|privacy)\b)/g, 'https://eu.mailtrap.io'],
  [/`mailtrap\.io`/g, '`eu.mailtrap.io`'],
];

mkdirSync(outDir, { recursive: true });

for (const file of readdirSync(srcDir).filter((f) => f.endsWith('.openapi.yml'))) {
  const source = readFileSync(join(srcDir, file), 'utf8');
  const eu = rules.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), source);
  writeFileSync(join(outDir, file), eu);
}
