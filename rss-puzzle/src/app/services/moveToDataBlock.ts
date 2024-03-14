import { getElementDocument } from "../utils/supFunctions";

export default function moveToDataBlock(e: Event) {
  // const dataBlock: HTMLElement = getElementDocument(".data-block");
  const { target } = e;
  if (!(target instanceof HTMLElement)) return;
  const resultBlock: HTMLElement = getElementDocument(".result-block");
  const { currentLine } = resultBlock.dataset;
  if (!currentLine) return;
  const currentLineEl = document.querySelector(`[data-id="${currentLine}"]`);
  if (!(currentLineEl instanceof HTMLElement)) return;
  const lastIndex: number = currentLineEl.childNodes.length;
  target.style.order = lastIndex.toString();
  currentLineEl.append(target);
}
