import { ANIMATION_TIME } from "../constants/index";
import isPuzzle from "../utils/isPuzzle";
import { getElementDocument } from "../utils/supFunctions";
import getElementsBtns from "./getElementsBtns";
import getElementsResultBlock from "./getElementsResultBlock";
import resetCheckStyles from "./resetCheckStyles";
import changeOrdersInBlock from "./translateBlock";

export default function moveFromResultBlock(e: Event) {
  if (!isPuzzle(e.target)) return;
  const { resultBlock, dataBlock } = getElementsResultBlock();
  const { continueBtn, checkBtn } = getElementsBtns();

  const { currentLine } = resultBlock.dataset;
  if (!currentLine) return;
  const currentLineEl = getElementDocument(`[data-line="${currentLine}"]`);

  changeOrdersInBlock(dataBlock, e);

  continueBtn.disabled = true;
  checkBtn.disabled = true;

  if (
    document.querySelector(".wrong-puzzle") ||
    document.querySelector(".correct-puzzle")
  )
    if (!(currentLineEl instanceof HTMLElement))
      throw new Error("Error current line");

  resetCheckStyles(currentLineEl);

  setTimeout(() => {
    if (
      !dataBlock.childNodes.length &&
      !currentLineEl.classList.contains("flex-between")
    )
      currentLineEl.classList.add("flex-between");
    else currentLineEl?.classList.remove("flex-between");
  }, ANIMATION_TIME);
}
