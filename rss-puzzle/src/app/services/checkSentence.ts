import { getElementDocument } from "../utils/supFunctions";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function checkSentence() {
  const currentLine: string = readDataSetResultBlock("currentLine");
  const currentLineEl = getElementDocument(`[data-line="${currentLine}"]`);
  const puzzles: Element[] = Object.values(currentLineEl.children);
  puzzles.forEach((b: Element, i: number) => {
    if (!(b instanceof HTMLElement))
      throw new Error("Puzzle isn't HTMLElement");
    if (i.toString() === b.dataset.id) {
      b.classList.add("correct-puzzle");
    } else b.classList.add("wrong-puzzle");
  });
}
