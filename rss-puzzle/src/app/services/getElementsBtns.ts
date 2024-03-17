import { getElementDocument } from "../utils/supFunctions";

export default function getElementsBtns() {
  const continueBtn: HTMLButtonElement = getElementDocument<HTMLButtonElement>(
    ".game__btn-continue",
  );
  const checkBtn: HTMLButtonElement =
    getElementDocument<HTMLButtonElement>(".game__btn-check");

  const autoCompleteBtn: HTMLButtonElement =
    getElementDocument<HTMLButtonElement>(".game__btn-auto-complete");

  return { continueBtn, checkBtn, autoCompleteBtn };
}
