import getCurrentLineElement from "./getCurrentLineElement";

export default function checkSentence() {
  const currentLineEl = getCurrentLineElement();
  const puzzles: Element[] = Object.values(currentLineEl.children);
  puzzles.forEach((b: Element, i: number) => {
    if (!(b instanceof HTMLElement))
      throw new Error("Puzzle isn't HTMLElement");
    if (i.toString() === b.dataset.id) {
      b.classList.add("correct-puzzle");
    } else b.classList.add("wrong-puzzle");
  });
}
