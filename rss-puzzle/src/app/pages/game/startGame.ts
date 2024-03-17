import level from "../../assets/wordCollections/wordCollectionLevel1";
import getElementsResultBlock from "../../services/getElementsResultBlock";
import hideWelcomePage from "../../services/hideWelcomePage";
import moveFromDataBlock from "../../services/moveFromDataBlock";
import moveFromResultBlock from "../../services/moveFromResultBlock";
import renderGame from "../../services/renderGame";
import createContinueButton from "../../utils/createContinueButton";
import createLines from "../../utils/createLines";
import createPuzzles from "../../utils/createPuzzles";
import onContinueGame from "../../services/onContinueGame";
import "./style.scss";

export default function startGame() {
  hideWelcomePage();
  const gameMarkup: HTMLElement | null = document.querySelector(".game");
  const game = !gameMarkup ? renderGame() : gameMarkup;
  const { resultBlock, dataBlock } = getElementsResultBlock();

  const { imageSrc } = level.rounds[0].levelData;

  resultBlock.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imageSrc}")`;
  const { textExample } = level.rounds[0].words[0];
  // const textExample = `I was surprised when my friends suddenly shouted, “Happy birthday!”`;
  console.log(textExample);

  const imgWords: string[] = textExample.split(" ");
  createLines(resultBlock);
  createPuzzles(imgWords);
  resultBlock.dataset.currentLine = "0";
  // resultBlock.dataset.currentWordIndex = "0";
  resultBlock.dataset.currentRound = "0";
  resultBlock.dataset.currentLevel = "0";
  // changeOrdersInBlock(dataBlock);
  const continueBtn = createContinueButton(game);
  // const bindCreatePuzzles = createPuzzles.bind(null, imgWords, false);
  // window.addEventListener("resize", bindCreatePuzzles);
  dataBlock.addEventListener("click", moveFromDataBlock);
  resultBlock.addEventListener("click", moveFromResultBlock);
  continueBtn.addEventListener("click", onContinueGame);
}