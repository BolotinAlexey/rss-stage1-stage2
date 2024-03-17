import level from "../../assets/wordCollections/wordCollectionLevel1";
import getElementsResultBlock from "../../services/getElementsResultBlock";
import hideWelcomePage from "../../services/hideWelcomePage";
import moveFromDataBlock from "../../services/moveFromDataBlock";
import moveFromResultBlock from "../../services/moveFromResultBlock";
import renderGame from "../../services/renderGame";
import createLines from "../../utils/createLines";
import createPuzzles from "../../utils/createPuzzles";
import onContinueGame from "../../services/onContinueGame";
import "./style.scss";
import checkSentence from "../../services/checkSentence";
import createButtons from "../../utils/createButtons";
import autoCompleteSentence from "../../services/autoCompleteSentence";

export default function startGame() {
  hideWelcomePage();
  const gameMarkup: HTMLElement | null = document.querySelector(".game");
  const game = !gameMarkup ? renderGame() : gameMarkup;
  const { resultBlock, dataBlock } = getElementsResultBlock();

  const { imageSrc } = level.rounds[0].levelData;

  resultBlock.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imageSrc}")`;
  const { textExample } = level.rounds[0].words[0];
  console.log(textExample);

  const imgWords: string[] = textExample.split(" ");
  createLines(resultBlock);
  createPuzzles(imgWords);
  ["currentLine", "currentRound", "currentLevel"].forEach((data) => {
    resultBlock.dataset[data] = "0";
  });
  const { continueBtn, checkBtn, autoCompleteBtn } = createButtons(game);

  dataBlock.addEventListener("click", moveFromDataBlock);
  resultBlock.addEventListener("click", moveFromResultBlock);
  continueBtn.addEventListener("click", onContinueGame);
  checkBtn.addEventListener("click", checkSentence);
  autoCompleteBtn.addEventListener("click", autoCompleteSentence);
}
