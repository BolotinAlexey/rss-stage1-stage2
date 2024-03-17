import { createElement } from "../utils/supFunctions";
import getCurrentLineElement from "./getCurrentLineElement";
import getElementsResultBlock from "./getElementsResultBlock";

export default function autoCompleteSentence(e: Event) {
  const autoCompleteBtn: EventTarget | null = e.target;
  if (!(autoCompleteBtn instanceof HTMLButtonElement))
    throw new Error("autocomlete button isn't HTMLButtonElement");
  autoCompleteBtn.disabled = true;

  const { dataBlock } = getElementsResultBlock();
  const puzzles: NodeList = document.querySelectorAll(".puzzle-data");

  const sortArray = Object.values(puzzles)
    .sort((a: Node, b: Node) => {
      if (!(a instanceof HTMLElement) || !(b instanceof HTMLElement))
        throw new Error(`${a} or ${b} isn't HTMLElement`);
      if (!a.dataset.id || !b.dataset.id)
        throw new Error(`${a} dataset.id or ${b} dataset.id undefined`);

      return Number(a.dataset.id) - Number(b.dataset.id);
    })
    .map((el: Node, i: number) => {
      if (!(el instanceof HTMLElement))
        throw new Error(`${el} isn't HTMLElement`);
      const newEl = createElement("div", ["puzzle"], el.dataset.word);
      newEl.style.order = i.toString();
      newEl.style.padding = el.style.padding;
      return newEl;
    });
  const currentLineEl = getCurrentLineElement();
  dataBlock.innerHTML = "";
  currentLineEl.innerHTML = "";
  currentLineEl.style.justifyContent = "space-between";
  currentLineEl.append(...sortArray);
}
