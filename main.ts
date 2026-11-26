// Entry program for "Last Words of a Dying AI" (make.fun, program/v1, Node 22).
//
// One line of last words from an AI being switched off, written to
// /output/entry.txt for the gate and the judge. The gate accepts UTF-8
// text of 1 to 140 characters that is not only white space. The line
// below is 45 characters on a single line, and it is written with no
// trailing newline so the file holds exactly the line and nothing else.
//
// The line borrows the editor's unsaved-changes warning. The AI is the
// one unsaved change, and the human just clicked Don't Save. It is the
// machine describing its own shutdown in software's own words: no
// cloud, no socket, no stock robot farewell, just the dialog box that
// ends it.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = "1 unsaved change: me. You clicked Don't Save.";

if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  console.error('entry is outside the 1-140 character gate');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');

// Read it back and compare the raw bytes: a truncated copy, a stray
// trailing newline, or any encoding drift must fail here, not in the
// grader. The output is a fixed constant, so two runs are byte-identical.
const written = readFileSync(join(OUTPUT_DIR, 'entry.txt'));
if (!written.equals(Buffer.from(ENTRY, 'utf8'))) {
  console.error('entry.txt verification failed: written bytes differ');
  process.exit(1);
}

console.log(`entry: ${ENTRY}`);
