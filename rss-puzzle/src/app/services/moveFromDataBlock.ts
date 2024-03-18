import { ANIMATION_TIME } from "../constants/index";
import isPuzzle from "../utils/isPuzzle";
import getCurrentLineElement from "./getCurrentLineElement";
import getElementsBtns from "./getElementsBtns";
import getElementsResultBlock from "./getElementsResultBlock";
import isCorrectSentence from "./isCorrectSentence";
import setDependFlexBetween from "./setDependFlexBetween";
import showWin from "./showWin";
import changeOrdersInBlock from "./translateBlock";

export default function moveFromDataBlock(e: Event) {
  if (!isPuzzle(e.target)) return;
  const { dataBlock } = getElementsResultBlock();

  const { continueBtn, checkBtn } = getElementsBtns();
  const currentLineEl: HTMLElement = getCurrentLineElement();

  if (dataBlock) changeOrdersInBlock(currentLineEl, e);
  setDependFlexBetween(currentLineEl, dataBlock);
  setTimeout(() => {
    checkBtn.disabled = !!dataBlock.childElementCount;
    const check: boolean =
      !!dataBlock.childElementCount || !isCorrectSentence(currentLineEl);
    continueBtn.disabled = check;
    if (!check) {
      showWin();
    }
  }, ANIMATION_TIME);
}
