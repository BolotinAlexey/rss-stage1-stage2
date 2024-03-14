import hideWelcomePage from "../../services/hideWelcomePage";
import renderGame from "../../services/renderGame";

export default function startGame() {
  hideWelcomePage();
  const gameMaekup: HTMLElement | null = document.querySelector(".game");
  if (!gameMaekup) renderGame();
}
