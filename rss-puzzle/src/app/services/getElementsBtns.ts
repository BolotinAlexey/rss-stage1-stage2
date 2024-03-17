import { getElementDocument } from "../utils/supFunctions";

export default function getElementsBtns() {
  const continueBtn: HTMLButtonElement = getElementDocument<HTMLButtonElement>(
    ".game__btn-continue",
  );
  const checkBtn: HTMLButtonElement =
    getElementDocument<HTMLButtonElement>(".game__btn-check");

  return { continueBtn, checkBtn };
}
