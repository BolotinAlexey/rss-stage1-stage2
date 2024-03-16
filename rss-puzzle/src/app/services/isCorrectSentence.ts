export default function isCorrectSentence(currentLineEl: HTMLElement): boolean {
  const puzzles: Element[] = Object.values(currentLineEl.children);
  // return puzzles.reduce((a: boolean, b: Element, i: number) => {
  //   if (!(b instanceof HTMLElement))
  //     throw new Error("Puzzle isn't HTMLElement");
  //   return a && i.toString() === b.dataset.id;
  // }, true);
  return true;
}
