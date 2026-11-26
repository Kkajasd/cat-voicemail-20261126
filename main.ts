import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — one line, 118 characters.
// Biscuit the cat, on the keyboard, deleting your work.
const ENTRY =
  "You've reached Biscuit. I'm on your keyboard, deleting your work. Leave a message after the beep — I'll eat it at 4am.";

// The grader mounts /output as a bind mount: create it if missing,
// never delete it, and overwrite the file in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
