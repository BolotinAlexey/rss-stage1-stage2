import readDataSetResultBlock from "./readDataSetResultBlock";

export default function getCurrentLineElement(): HTMLElement {
  const currentLine = readDataSetResultBlock("currentLine");

  const currentLineEl = document.querySelector(`[data-line="${currentLine}"]`);
  if (!(currentLineEl instanceof HTMLElement))
    throw new Error("Current line don't exist");
  return currentLineEl;
}
