# Hangman Game

A classic Hangman game where you guess US state names. Built with React.

## Installation

1. Install [Node.js](https://nodejs.org/) (LTS recommended).
2. Clone this repository and go to the project folder:
   ```bash
   git clone https://github.com/sarangspadalkar/hangmanGame.git
   cd hangmanGame
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

The project is set up to deploy to **https://sarangspadalkar.github.io/hangmanGame**.

1. Ensure the repo is on GitHub under your account (e.g. `sarangspadalkar/hangmanGame`).
2. Run:

   ```bash
   npm run deploy
   ```

   This builds the app and pushes the `build` folder to the `gh-pages` branch. GitHub Pages will serve the site from that branch.

3. In GitHub: **Settings → Pages** → set **Source** to “Deploy from a branch”, branch **gh-pages**, folder **/ (root)**. Save. The site will be available at the URL above after a short delay.

## Scripts

- `npm start` – run development server
- `npm run build` – production build
- `npm test` – run tests
- `npm run deploy` – build and deploy to GitHub Pages
