// Funniest Cat Voicemail Greeting.
// A cat's voicemail: he is mid-crime, knocking the caller's glass off the
// table, and the message will only earn the caller a 4 a.m. wake-up call
// demanding food. Two cat-specific jokes, one voice, punch lands fast.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: Miso's voicemail greeting.
const ENTRY =
  "You've reached Miso. I'm busy knocking your glass off the table. Leave a message — I'll wake you at 4 a.m. for food.";

// The gate: 1 to 120 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
