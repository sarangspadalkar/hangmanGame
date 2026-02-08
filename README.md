# Hangman Game

A classic **Hangman** game where you guess **US state and territory names** — one letter at a time. Built with **React 18** and **TypeScript**.

**Live demo:** [https://sarangspadalkar.github.io/hangman-game/](https://sarangspadalkar.github.io/hangman-game/)

---

## Features

- **Guess the state** — Random US state or territory (e.g. Alabama, Puerto Rico, District of Columbia).
- **6 lives** — Wrong guesses add a part to the hangman figure; 6 wrong guesses and you lose.
- **QWERTY keyboard** — Click letters or type A–Z; correct letters turn green, wrong ones red.
- **Win / lose** — Clear end screen with the answer and a “Play again” button.
- **Accessible** — Focus styles, ARIA labels, and optional reduced motion.

---

## Tech stack

- **React 18** (function components, hooks)
- **TypeScript**
- **Create React App** (react-scripts)
- **CSS Modules** for component styles

---

## Project structure

```
src/
├── App.tsx                 # Main app and keyboard listener
├── index.tsx               # Entry point
├── fetchStates.ts         # List of US states/territories
├── hooks/
│   └── useHangman.ts      # Game state and logic
├── components/
│   ├── Header/            # Title and subtitle
│   ├── Hangman/           # SVG gallows + figure + lives
│   ├── CorrectGuessList/  # Word with blanks / revealed letters
│   ├── TextEntry/         # QWERTY letter buttons
│   ├── GameOver/          # Win/lose overlay
│   └── NewGameButton/     # (optional) New game button
└── react-app-env.d.ts     # TypeScript declarations (e.g. CSS modules)
```

---

## Getting started

### Prerequisites

- **Node.js** 18+ and **npm**

### Install and run

```bash
git clone https://github.com/sarangspadalkar/hangman-game.git
cd hangman-game
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|--------|-------------|
| `npm start` | Run dev server |
| `npm run build` | Production build |
| `npm test` | Run tests |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |
| `npm run deploy` | Build and push to `gh-pages` branch (legacy) |

---

## Deployment (GitHub Pages)

This repo uses **GitHub Actions** to deploy to GitHub Pages on every push to `master`:

1. Workflow runs: build → upload artifact → deploy via `actions/deploy-pages`.
2. In the repo: **Settings → Pages** → Source: **GitHub Actions**.
3. Site URL: **https://sarangspadalkar.github.io/hangman-game/**

---

## License

MIT (or add your preferred license here.)
