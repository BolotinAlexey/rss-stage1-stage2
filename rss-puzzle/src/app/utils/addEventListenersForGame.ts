import autoCompleteSentence from "../services/autoCompleteSentence";
import checkSentence from "../services/checkSentence";
import moveFromDataBlock from "../services/moveFromDataBlock";
import moveFromResultBlock from "../services/moveFromResultBlock";
import onContinueGame from "../services/onContinueGame";
import createButtons from "./createButtons";
import resizeListener from "./resizeListener";

export default function addEventListenersForGame(
  game: HTMLElement,
  dataBlock: HTMLElement,
  resultBlock: HTMLElement,
) {
  const { continueBtn, checkBtn, autoCompleteBtn } = createButtons(game);

  dataBlock.addEventListener("click", moveFromDataBlock);
  resultBlock.addEventListener("click", moveFromResultBlock);
  continueBtn.addEventListener("click", onContinueGame);
  checkBtn.addEventListener("click", checkSentence);
  autoCompleteBtn.addEventListener("click", autoCompleteSentence);
  resizeListener();
}
