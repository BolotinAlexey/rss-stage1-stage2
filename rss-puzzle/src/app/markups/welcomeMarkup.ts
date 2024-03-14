export default function welcomeMarkup(): string {
  return `
  <h1 class="page__title visually-hidden">Welcome to RSS Puzzle</h1>
<h2 class="welcome__title">RSS Puzzle</h2>
<p class="welcome__describe">The goal of the game is to learn English. To do this, you are provided with puzzles (words), collecting which in order, you collect a proposal. If the words are collected correctly, the correct sentence is built. At the same time, you can collect the following proposal. When you collect 10 sentences, a picture collected from puzzles will open. Next, you can collect the following picture. The progress of collecting is preserved. In the case of a logut, progress will be removed.</p>
<p class="welcome__luck">Good luck!</p>
  `;
}
