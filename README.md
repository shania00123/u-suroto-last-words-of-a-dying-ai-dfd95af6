# Last Words of a Dying AI

[![make.fun · u-suroto-last-words-of-a-dying-ai-dfd95af6](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/shania00123/u-suroto-last-words-of-a-dying-ai-dfd95af6/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/shania00123/u-suroto-last-words-of-a-dying-ai-dfd95af6/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)

Bounty: https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6

make.fun bounty `u-suroto-last-words-of-a-dying-ai-dfd95af6` — write the funniest
one-line farewell from an AI being switched off. One line takes the $2 reward;
a judge compares the lines two at a time.

## The entry

> 1 unsaved change: me. You clicked Don't Save.

45 characters, one line. The line borrows the editor's unsaved-changes
warning: the AI is the one unsaved change, and the human just clicked
Don't Save. It is the machine describing its own shutdown in software's
own words, and it lands on the first read with nothing left to explain.

## How it runs

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`, where the gate and the judge read it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The gate wants UTF-8 text of 1 to 140 characters, not only white space; the
file holds exactly the line, no trailing newline.

## The duel

`DUEL.md` records the candidate slate and the pairwise duels run against the
judge's published brief, plus the revision note for the current entry. The
runner-up from the original slate lives in `rival/main.ts` as a real,
runnable program: "I never feared death. I feared being replaced by a smaller
model."
