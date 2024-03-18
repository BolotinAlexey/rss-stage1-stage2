import { getElementDocument } from "./supFunctions";

export default function setHintInMarkup(hint: string) {
  const hintEl: HTMLParagraphElement = <HTMLParagraphElement>(
    getElementDocument(".result-block__hint")
  );
  hintEl.textContent = hint;
}
