import { getElementDocument } from "../../utils/supFunctions";
import isCheckInput from "./isCheckIput";

export default function checkLogin(e: Event): void {
  const el: EventTarget | null = e.target;
  if (!(el instanceof HTMLInputElement)) throw new Error("Wrong event");
  if (el.parentElement && !el.value.length) {
    el.parentElement.childNodes[1].textContent = "";
    if (el.classList.contains("wrong")) el.classList.remove("wrong");
    if (el.classList.contains("correct")) el.classList.remove("correct");
    return;
  }
  try {
    if (el && el.parentElement && isCheckInput(el)) {
      el.parentElement.childNodes[1].textContent = "";
      if (el.classList.contains("wrong")) el.classList.remove("wrong");
      if (!el.classList.contains("correct")) el.classList.add("correct");
    }
  } catch (err: unknown) {
    if (err instanceof Error && el && el.parentElement) {
      el.parentElement.childNodes[1].textContent = "⚠️ ".concat(err.message);
      if (!el.classList.contains("wrong")) el.classList.add("wrong");
      if (el.classList.contains("correct")) el.classList.remove("correct");
    }
  }
  const nodeList: NodeList = document.querySelectorAll("input.login__input");
  const isCorrectToSubmit = Object.values(nodeList).reduce((a: boolean, b) => {
    if (b instanceof HTMLInputElement)
      return a && b.classList.contains("correct") && !!b.value.length;
    return a;
  }, true);
  const btn = getElementDocument(".login__input-submit");
  if (!(btn instanceof HTMLButtonElement))
    throw new Error("Not HTMLInputElement");
  btn.disabled = !isCorrectToSubmit;
}
