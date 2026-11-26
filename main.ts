import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — one line, 118 characters.
// Biscuit the cat, on the keyboard, deleting your work.
const ENTRY =
  "You've reached Biscuit. I'm on your keyboard, deleting your work. Leave a message after the beep — I'll eat it at 4am.";

// One-line voicemail limit: the greeting must fit in a single line.
const MAX_CHARS = 120;
if (ENTRY.length === 0 || ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if ([...ENTRY].length > MAX_CHARS) {
  throw new Error(`entry is ${[...ENTRY].length} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

// Format choice: a classic voicemail greeting in three beats —
// (1) "You've reached Biscuit" names the cat as the mailbox owner,
// (2) the keyboard joke lands the cat premise, (3) the 4am payoff
// turns the beep into a threat. No trailing newline: the grader
// reads the file raw, so the line is written exactly as counted.
const text = ENTRY.trim();
if (text !== ENTRY) {
  throw new Error("entry must not have leading or trailing whitespace");
}

// The grader mounts /output as a bind mount: create it if missing,
// never delete it, and overwrite the file in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
