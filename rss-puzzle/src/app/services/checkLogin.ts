import isCheckInput from "./isCheckInput";

export default function checkLogin(e: Event): void {
  const el: EventTarget = e.target;
  if (!(el instanceof HTMLInputElement)) throw new Error("Wrong event");
  if (!el.value.length) {
    el.parentElement.childNodes[1].textContent = "";
    if (el.classList.contains("wrong")) el.classList.remove("wrong");
    if (el.classList.contains("correct")) el.classList.remove("correct");
    return;
  }
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

  const nodeList: NodeList = document.querySelectorAll("input.login__input");

  const isCorrectToSubmit = Object.values(nodeList).reduce(
    (a: boolean, b: HTMLInputElement) => a && b.classList.contains("correct"),
    true,
  );

  const btn = el.parentElement.parentElement.children[2];
  if (!(btn instanceof HTMLButtonElement))
    throw new Error("Not HTMLInputElement");
  btn.disabled = !isCorrectToSubmit;
}
