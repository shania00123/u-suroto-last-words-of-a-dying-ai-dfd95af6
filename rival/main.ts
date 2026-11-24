// RIVAL version for "Last Words of a Dying AI" (make.fun, program/v1, Node 22).
//
// This is the challenger, not the entry: it writes the runner-up line to
// /output/entry.txt so it can be run and duelled against the main entry.
// The main entry (root main.ts) is the one that ships; this file exists
// so the duel is between two real, runnable programs, not two sentences
// in a document. It is never the entrypoint: only main.ts at the root
// selects the runtime.
//
// The rival line: an AI that never feared death, only being replaced by
// a smaller model. Strong on machine voice (model size is the AI's own
// anxiety), weaker than the main entry on tightness (65 characters) and
// on the switch itself (replacement is not quite being switched off).

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = 'I never feared death. I feared being replaced by a smaller model.';

if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  console.error('entry is outside the 1-140 character gate');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');

console.log(`entry: ${ENTRY}`);
