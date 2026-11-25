// One Line, One Laugh: Roast Your Fridge — entry for make.fun
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
//
// Writes a single-line roast of my own fridge to
// $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-200 UTF-8 characters).

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My fridge hums all night like it's composing a symphony, and the only note it knows is 'something in here died.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? './out';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, LINE + '\n', 'utf8');

// Validation: read the file back and confirm it is exactly the intended
// line — one line, 1-200 characters, byte-identical to LINE + newline.
const written = readFileSync(outPath, 'utf8');
const body = written.endsWith('\n') ? written.slice(0, -1) : written;
if (body !== LINE) throw new Error('entry.txt does not match the intended line');
if (body.includes('\n')) throw new Error('entry.txt must be a single line');
if ([...body].length < 1 || [...body].length > 200) {
  throw new Error('entry.txt must be 1-200 characters');
}
console.log(`validated: ${[...body].length} chars, 1 line`);
