import welcome from "../pages/welcome/index";
import isCheckInput from "./isCheckInput";

export default function checkLogin(e: Event): void {
  const el: EventTarget = e.target;
  if (!(el instanceof HTMLInputElement)) throw new Error("Wrong event");

  try {
    if (isCheckInput(el)) {
      el.parentElement.childNodes[1].textContent = "";
      if (el.classList.contains("wrong")) el.classList.remove("wrong");
      if (!el.classList.contains("correct")) el.classList.add("correct");
    }
  } catch (err) {
    el.parentElement.childNodes[1].textContent = "⚠️ ".concat(err.message);
    if (!el.classList.contains("wrong")) el.classList.add("wrong");
    if (el.classList.contains("correct")) el.classList.remove("correct");
  }

  if (!el.value.length) {
    el.dataset.wrong = null;
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
