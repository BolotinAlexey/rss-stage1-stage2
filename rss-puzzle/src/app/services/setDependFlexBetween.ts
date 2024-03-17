import { ANIMATION_TIME } from "../constants/index";

export default function setDependFlexBetween(
  currentLineEl: HTMLElement,
  dataBlock: HTMLElement,
) {
  if (
    dataBlock.childNodes &&
    dataBlock.childNodes.length === 1 &&
    !currentLineEl.classList.contains("flex-between")
  )
    setTimeout(() => {
      currentLineEl.classList.add("flex-between");
    }, ANIMATION_TIME);
  else if (
    dataBlock.childNodes &&
    currentLineEl.classList.contains("flex-between")
  )
    currentLineEl.classList.remove("flex-between");
}
