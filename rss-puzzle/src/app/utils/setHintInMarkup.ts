import { getElementDocument } from "./supFunctions";

export default function setHintInMarkup(hint: string) {
  const hintElSentence: HTMLParagraphElement = <HTMLParagraphElement>(
    getElementDocument(".result-block__hint")
  );
  hintElSentence.textContent = hint;
}
