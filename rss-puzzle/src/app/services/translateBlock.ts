import { ANIMATION_TIME } from "../constants/index";
import changeOrdersInBlock from "./changeOrdersInBlock";

export default function translateBlock(block: HTMLElement, e: Event) {
  const { target } = e;
  if (!(target instanceof HTMLElement)) return;

  const clone = target.cloneNode(true);
  const newClone = target.cloneNode(true);
  if (!(clone instanceof HTMLElement) || !(newClone instanceof HTMLElement))
    throw new Error("clone not HTMLElement");

  const lastIndex: number = block.childNodes.length;
  const oldPosition = { x: target.offsetLeft, y: target.offsetTop };

  changeOrdersInBlock(block);
  clone.style.order = lastIndex.toString();

  target.append(newClone);
  block.append(clone);
  const newPosition = { x: clone.offsetLeft, y: clone.offsetTop };
  clone.remove();

  newClone.classList.add("absolute");
  newClone.style.transform = `translate(${newPosition.x - oldPosition.x}px, ${newPosition.y - oldPosition.y}px)`;
  if (!target.classList.contains("width-zero"))
    target.classList.add("width-zero");

  setTimeout(() => {
    block.append(target);
    newClone.remove();
    target.style.order = lastIndex.toString();
    if (target.classList.contains("width-zero"))
      target.classList.remove("width-zero");
  }, ANIMATION_TIME);
}
