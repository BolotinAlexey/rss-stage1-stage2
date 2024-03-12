import welcome from "../pages/welcome/index";
import ApiLS from "./apiLocalStorage";
import isCheckInput from "./isCheckInput";

export default function checkLogin(e: Event): void {
  const el: EventTarget = e.target;
  if (!(el instanceof HTMLInputElement)) throw new Error("Wrong event");

  if (isCheckInput(el)) {
    if (el.classList.contains("wrong")) el.classList.remove("wrong");
    if (!el.classList.contains("correct")) el.classList.add("correct");
  } else {
    if (!el.classList.contains("wrong")) el.classList.add("wrong");
    if (el.classList.contains("correct")) el.classList.remove("correct");
  }

  if (!el.value.length) {
    if (el.classList.contains("wrong")) el.classList.remove("wrong");
    if (el.classList.contains("correct")) el.classList.remove("correct");
  }

  const nodeList: NodeList = document.querySelectorAll("input.login__input");

  const isCorrectToSubmit = Object.values(nodeList).reduce(
    (a: boolean, b: HTMLInputElement) => a && b.classList.contains("correct"),
    true,
  );
  if (isCorrectToSubmit) {
    welcome();
  }
}
