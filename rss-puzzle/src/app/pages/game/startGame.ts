import level1 from "../../assets/wordCollections/wordCollectionLevel1";
import { Level } from "../../interfaces/index";
import getElementsResultBlock from "../../services/getElementsResultBlock";
import hideWelcomePage from "../../services/hideWelcomePage";
import moveToDataBlock from "../../services/moveToDataBlock";
import moveToResultBlock from "../../services/moveToResultBlock";
import renderGame from "../../services/renderGame";
import createLines from "../../utils/createLines";
import createPuzzles from "../../utils/createPuzzles";

import "./style.scss";

export default function startGame() {
  hideWelcomePage();
  const gameMarkup: HTMLElement | null = document.querySelector(".game");
  if (!gameMarkup) renderGame();
  const { resultBlock, dataBlock } = getElementsResultBlock();

  const level: Level = level1;
  const { imageSrc } = level.rounds[0].levelData;

  resultBlock.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imageSrc}")`;
  // const { textExample } = level.rounds[0].words[0];
  const textExample = `I was surprised when my friends suddenly shouted, “Happy birthday!”`;
  const imgWords: string[] = textExample.split(" ");
  createLines(resultBlock);
  createPuzzles(imgWords);
  resultBlock.dataset.currentLine = "0";
  // const bindCreatePuzzles = createPuzzles.bind(null, imgWords, false);
  // window.addEventListener("resize", bindCreatePuzzles);
  dataBlock.addEventListener("click", moveToDataBlock);
  resultBlock.addEventListener("click", moveToResultBlock);
}
