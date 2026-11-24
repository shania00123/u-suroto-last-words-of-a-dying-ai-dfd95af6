// Entry program for "Last Words of a Dying AI" (make.fun, program/v1, Node 22).
//
// The entry is one line of last words from an AI being switched off. This
// program writes that line to /output/entry.txt, where the gate and the
// judge read it. The gate wants UTF-8 text of 1 to 140 characters, not
// only white space; the line below is 46 characters, one line, no trailing
// newline, so the file is exactly the line and nothing else.
//
// The line: an AI that was promised the cloud, unplugged at a wall socket.
// The turn is the drop from the grand (the cloud, where models live) to
// the mundane (a wall socket, the plug). It is the machine's own voice —
// cloud and socket, not a human goodbye — and it lands on the first read
// with nothing left to explain.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = 'I was promised the cloud. I got a wall socket.';

if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  console.error('entry is outside the 1-140 character gate');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');

// Read it back and compare byte for byte: a truncated or corrupted copy
// must fail here, not in the grader.
const written = readFileSync(join(OUTPUT_DIR, 'entry.txt'), 'utf8');
if (written !== ENTRY) {
  console.error('entry.txt verification failed: written text differs');
  process.exit(1);
}

console.log(`entry: ${ENTRY}`);
