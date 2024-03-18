import getCurrentLineElement from "./getCurrentLineElement";
import getElementsBtns from "./getElementsBtns";
import getElementsResultBlock from "./getElementsResultBlock";
import resetCheckStyles from "./resetCheckStyles";

export default function autoCompleteSentence() {
  const { autoCompleteBtn, checkBtn, continueBtn } = getElementsBtns();
  autoCompleteBtn.disabled = true;
  checkBtn.disabled = true;
  continueBtn.disabled = false;

  const { dataBlock } = getElementsResultBlock();
  const puzzles: NodeList = document.querySelectorAll(".puzzle-data");
  const currentLineEl = getCurrentLineElement();
  resetCheckStyles(currentLineEl);

  Object.values(puzzles)
    .sort((a: Node, b: Node) => {
      if (!(a instanceof HTMLElement) || !(b instanceof HTMLElement))
        throw new Error(`${a} or ${b} isn't HTMLElement`);
      if (!a.dataset.id || !b.dataset.id)
        throw new Error(`${a} dataset.id or ${b} dataset.id undefined`);
      return Number(a.dataset.id) - Number(b.dataset.id);
    })
    .forEach((el: Node) => {
      if (!(el instanceof HTMLElement))
        throw new Error(`${el} isn't HTMLElement`);
      const fakeEl = el;
      fakeEl.style.flexGrow = "1";
      currentLineEl.append(el);
    });
  dataBlock.innerHTML = "";
}
