import level from "../../assets/wordCollections/wordCollectionLevel1";
import getElementsResultBlock from "../../services/getElementsResultBlock";
import hideWelcomePage from "../../services/hideWelcomePage";
import renderGame from "../../services/renderGame";
import createLines from "../../utils/createLines";
import createPuzzles from "../../utils/createPuzzles";
import "./style.scss";
import addEventListenersForGame from "../../utils/addEventListenersForGame";
import setHintInMarkup from "../../utils/setHintInMarkup";

export default function startGame() {
  hideWelcomePage();
  const gameMarkup: HTMLElement | null = document.querySelector(".game");
  const game = !gameMarkup ? renderGame() : gameMarkup;
  const { resultBlock, dataBlock } = getElementsResultBlock();

  const { imageSrc } = level.rounds[0].levelData;

  resultBlock.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imageSrc}")`;
  const { textExample, textExampleTranslate } = level.rounds[0].words[0];
  console.log(textExample);

  const imgWords: string[] = textExample.split(" ");
  createLines(resultBlock);
  createPuzzles(imgWords);
  setHintInMarkup(textExampleTranslate);
  ["currentLine", "currentRound", "currentLevel"].forEach((data) => {
    resultBlock.dataset[data] = "0";
  });

  addEventListenersForGame(game, dataBlock, resultBlock);
}
