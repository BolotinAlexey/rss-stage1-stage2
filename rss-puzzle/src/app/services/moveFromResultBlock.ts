import { ANIMATION_TIME } from "../constants/index";
import isPuzzle from "../utils/isPuzzle";
import getElementsResultBlock from "./getElementsResultBlock";
import changeOrdersInBlock from "./translateBlock";

export default function moveFromResultBlock(e: Event) {
  if (!isPuzzle(e.target)) return;
  const { resultBlock, dataBlock } = getElementsResultBlock();
  //
  const { currentLine } = resultBlock.dataset;
  if (!currentLine) return;
  const currentLineEl = document.querySelector(`[data-line="${currentLine}"]`);

  changeOrdersInBlock(dataBlock, e);

  if (
    currentLineEl &&
    !dataBlock.childNodes.length &&
    !currentLineEl.classList.contains("flex-between")
  )
    setTimeout(() => {
      currentLineEl.classList.add("flex-between");
    }, ANIMATION_TIME);
  else currentLineEl?.classList.remove("flex-between");
}
