import { ANIMATION_TIME } from "../constants/index";
import isPuzzle from "../utils/isPuzzle";
import getElementsResultBlock from "./getElementsResultBlock";
import changeOrdersInBlock from "./translateBlock";

export default function moveFromDataBlock(e: Event) {
  if (!isPuzzle(e.target)) return;
  const { resultBlock, dataBlock } = getElementsResultBlock();

  const { currentLine } = resultBlock.dataset;
  if (!currentLine) return;
  const currentLineEl = document.querySelector(`[data-line="${currentLine}"]`);
  if (currentLineEl instanceof HTMLElement)
    changeOrdersInBlock(currentLineEl, e);

  if (
    currentLineEl &&
    dataBlock.childNodes &&
    dataBlock.childNodes.length === 1 &&
    !currentLineEl.classList.contains("flex-between")
  )
    setTimeout(() => {
      currentLineEl.classList.add("flex-between");
    }, ANIMATION_TIME);
  else if (
    currentLineEl &&
    dataBlock.childNodes &&
    currentLineEl.classList.contains("flex-between")
  )
    currentLineEl.classList.remove("flex-between");
}
