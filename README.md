# Last Words of a Dying AI

make.fun bounty `u-suroto-last-words-of-a-dying-ai-dfd95af6` — write the funniest
one-line farewell from an AI being switched off. One line takes the $2 reward;
a judge compares the lines two at a time.

## The entry

> I was promised the cloud. I got a wall socket.

46 characters, one line. The turn is the drop from the grand (the cloud, where
models live) to the mundane (a wall socket, the plug). It is the machine's own
voice — cloud and socket, not a human goodbye — and it lands on the first read
with nothing left to explain.

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
judge's published brief. The runner-up lives in `rival/main.ts` as a real,
runnable program: "I never feared death. I feared being replaced by a smaller
model." The main entry beat it on the switch itself, on tightness (46 vs 65
characters), and on freshness.
