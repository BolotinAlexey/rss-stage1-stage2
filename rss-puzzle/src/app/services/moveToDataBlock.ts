import isPuzzle from "../utils/isPuzzle";
import { getElementDocument } from "../utils/supFunctions";
import changeOrdersInBlock from "./translateBlock";

export default function moveToDataBlock(e: Event) {
  if (!isPuzzle(e.target)) return;
  const resultBlock: HTMLElement = getElementDocument(".result-block");
  const { currentLine } = resultBlock.dataset;
  if (!currentLine) return;
  const currentLineEl = document.querySelector(`[data-id="${currentLine}"]`);
  if (currentLineEl instanceof HTMLElement)
    changeOrdersInBlock(currentLineEl, e);
}
