import autoCompleteSentence from "../services/autoCompleteSentence";
import checkSentence from "../services/checkSentence";
import moveFromDataBlock from "../services/moveFromDataBlock";
import moveFromResultBlock from "../services/moveFromResultBlock";
import onContinueGame from "../services/onContinueGame";
import pronounceSentence from "../services/pronounceSentence";
import recordToLS from "../services/recordToLS";
import createButtons from "./createButtons";
import createHintBlock from "./createHintBlock";
import getInputsElements from "./getInputsElements";
import resizeListener from "./resizeListener";

export default function addEventListenersForGame(
  game: HTMLElement,
  dataBlock: HTMLElement,
  resultBlock: HTMLElement,
  audio: HTMLAudioElement,
) {
  const { continueBtn, checkBtn, autoCompleteBtn } = createButtons(game);

  dataBlock.addEventListener("click", moveFromDataBlock);
  resultBlock.addEventListener("click", moveFromResultBlock);
  continueBtn.addEventListener("click", onContinueGame);
  checkBtn.addEventListener("click", checkSentence);
  autoCompleteBtn.addEventListener("click", autoCompleteSentence);
  resizeListener();
  const bindpronounceSentence = pronounceSentence.bind(null, audio);
  const { volume } = createHintBlock();
  volume.addEventListener("click", bindpronounceSentence);

  const { lamp, sound } = getInputsElements();
  lamp.addEventListener("change", recordToLS);
  sound.addEventListener("change", recordToLS);
}
