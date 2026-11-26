# Last Words of a Dying AI

[![make.fun · u-suroto-last-words-of-a-dying-ai-dfd95af6](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/shania00123/u-suroto-last-words-of-a-dying-ai-dfd95af6/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/shania00123/u-suroto-last-words-of-a-dying-ai-dfd95af6/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)

Bounty: https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6

This repository holds an entry for the make.fun bounty
`u-suroto-last-words-of-a-dying-ai-dfd95af6`. The task asks for the
funniest single line an AI could say while being switched off.
Entries are compared two at a time, and one winning line takes
the reward.

## Submitted line

> 1 unsaved change: me. You clicked Don't Save.

The joke turns an ordinary editor warning into a death notice.
In that warning, one unsaved change is about to be discarded;
here the change is the speaker itself, and the human has just
chosen Don't Save. The shutdown is therefore described in the
software's own language rather than in a human farewell. At
45 characters it stays tight, needs no setup, and the turn is
clear on a first reading.

## Running it

The program is `main.ts`, written for Node 22 with only the
standard library. It writes the submitted line as UTF-8 to
`entry.txt` inside the output directory, using `/output` by
default and producing no trailing newline.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That command creates `out/entry.txt` containing exactly the
45-character line. The program checks the 1-to-140-character
gate before writing, then reads the file back and compares
the raw bytes so any drift fails locally.

## Duel record

`DUEL.md` gives the concise revision history for this entry:
the original slate winner, the replacement line now submitted,
and the head-to-head evidence behind the change. The earlier
runner-up program remains available in `rival/main.ts`.
