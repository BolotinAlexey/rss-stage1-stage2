import { getElementDocument } from "../utils/supFunctions";

export default function moveToResultBlock(e: Event) {
  const { target } = e;
  if (!(target instanceof HTMLElement)) return;
  const dataBlock: HTMLElement = getElementDocument(".data-block");
  const lastIndex: number = dataBlock.childNodes.length;
  target.style.order = lastIndex.toString();
  dataBlock.append(target);
}
