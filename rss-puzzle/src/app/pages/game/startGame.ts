import level1 from "../../assets/wordCollections/wordCollectionLevel1";
import { Level } from "../../interfaces/index";
import getElementsResultBlock from "../../services/getElementsResultBlock";
import hideWelcomePage from "../../services/hideWelcomePage";
import renderGame from "../../services/renderGame";
import createPuzzles from "../../utils/createPuzzles";

import "./style.scss";

export default function startGame() {
  hideWelcomePage();
  const gameMarkup: HTMLElement | null = document.querySelector(".game");
  if (!gameMarkup) renderGame();
  const { resultBlock, dataBlock } = getElementsResultBlock();

  const level: Level = level1;
  console.log(level.rounds[0].words[0]);
  const { imageSrc } = level.rounds[0].levelData;

  resultBlock.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imageSrc}")`;
  const { textExample } = level.rounds[0].words[0];
  createPuzzles(textExample, dataBlock, resultBlock);
}
