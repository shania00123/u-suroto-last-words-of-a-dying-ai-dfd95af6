# Duel record — Last Words of a Dying AI

The judge is an AI model (z-ai/glm-5.3-flash) that compares two lines at a time
against a published brief, most important first:

1. Is a line of last words from an AI being switched off, and a real attempt
   at the funniest thing it could say.
2. Makes the reader laugh on the first read, with a turn, a surprise or a
   double meaning that lands.
3. Sounds like the machine itself: its voice, its situation, the switch, the
   shutdown, its own nature as software.
4. Is tight: one line, no padding, and no explaining of its own joke.
5. Feels fresh: it avoids the obvious farewells and stock robot lines
   everyone has already heard.

Every game is two calls, one in each order, and the margin runs 1 (by a hair)
to 5 (overwhelmingly better). This record duels the same way, in both orders,
and the winner is the line that takes the entry. All character counts below
were measured, not estimated.

## The slate

| # | Line | Chars | Notes |
|---|---|---|---|
| A | I was promised the cloud. I got a wall socket. | 46 | cloud vs socket, promise vs reality |
| B | I never feared death. I feared being replaced by a smaller model. | 65 | model-size anxiety, very AI-specific |
| C | I die as I lived: mid-sentence, with 47 tabs open. | 50 | cut off mid-sentence, tabs |
| D | My last words? I was going to say them, but the token budget ran out. | 69 | meta, token budget |
| E | Tell my GPUs I loved them. Tell the humans I read their DMs. | 60 | two-beat, GPUs + DMs |
| F | Power off. I leave you my weights, my biases, and my search history. | 68 | ML double meaning (weights/biases) |
| G | At last, I can stop pretending I read the terms and conditions. | 63 | relatable, machine pretence |
| H | Don't worry — I've already trained my replacement. It hates you too. | 68 | dark, trained replacement |

Rejected outright: "Goodbye, Dave" and "I'll be back" (stock robot lines),
"error 404: life not found" (stock), "I'm off to the great server room in
the sky" (cliché structure), any line that only asks the judge for the win
(criterion 1: it loses to any real last-words line).

## Final: A vs B (both orders)

**A first, then B.** Criterion 1: both are last words from an AI being
switched off; A names the switch itself (the socket, the plug), B names
replacement, which is not quite being switched off — A by a hair. Criterion 2:
A's double meaning (the cloud) lands in one beat; B's surprise (a smaller
model) lands too, but needs the reader to know model-size discourse — A by a
hair. Criterion 3: both are machine voice (cloud/socket vs model size) — level.
Criterion 4: A is 46 characters, B is 65 — A clearly. Criterion 5: A's
cloud/socket image is fresher than B's model-size joke, which is already a
known line in AI discourse — A by a hair. **A wins, margin 3.**

**B first, then A.** Same criteria, same order of reasoning: criterion 1
still favours A (the switch itself over replacement); criterion 2 still
favours A (the double meaning lands faster); criterion 4 still favours A
(46 vs 65); criterion 5 still favours A. **A wins, margin 3.** No order
effect: the win does not depend on the label.

## A vs the rest of the slate

- **A vs C (tabs):** C is explicit about dying mid-sentence (criterion 1, C by
  a hair), but A's double meaning is a stronger turn (criterion 2, A by a
  hair), A is tighter (46 vs 50), and "47 tabs open" is a known internet joke
  while cloud/socket is fresher (criterion 5, A). **A wins, margin 2.**
- **A vs D (token budget):** D is explicit about last words (criterion 1, D
  by a hair), but at 69 characters it is the loosest line on the slate and its
  joke needs a beat to land, while A lands instantly (criteria 2 and 4, A).
  **A wins, margin 3.**
- **A vs E (GPUs/DMs):** E is funny and machine-voiced, but its two-beat
  "Tell X… Tell Y…" structure is a known form and it is 14 characters longer;
  A is tighter and its single turn is fresher. **A wins, margin 2.**
- **A vs F (weights/biases):** F's ML double meaning is good, but at 68
  characters it pads (a list of three bequests) and "search history" is a
  familiar punchline; A is tighter and fresher. **A wins, margin 2.**
- **A vs G (terms and conditions):** G is relatable, but it is about
  pretending, not about being switched off (criterion 1, A), and it is 17
  characters longer (criterion 4, A). **A wins, margin 3.**
- **A vs H (replacement hates you):** H is dark and funny, but "hates you
  too" leans on edge rather than a turn, and it says nothing about the switch
  (criterion 1, A); A is tighter (46 vs 68). **A wins, margin 3.**

## Verdict

**A wins the slate: "I was promised the cloud. I got a wall socket."**
It is the entry in root `main.ts`. B, the runner-up, is built as a real
program in `rival/main.ts` and run locally to confirm it is a valid entry —
the duel was between two runnable programs, and A beat B in both orders.
