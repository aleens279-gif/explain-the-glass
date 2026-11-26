// Five Seconds to Explain the Glass — writes one line to /output/entry.txt
// Gate: 143 chars (max 200), one sentence, no trailing newline.
// Twist: the glass was eavesdropping on the birds — a gossip, not gravity.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "The glass spent all",
  "morning eavesdropping on the",
  "birds outside, so I tipped",
  "it off the table, because",
  "a cat cannot abide a gossip in the house.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
