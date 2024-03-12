import isCheckInput from "./isCheckInput";

export default function checkLogin(e: Event): void {
  const el: EventTarget = e.target;
  if (!(el instanceof HTMLInputElement)) throw new Error("Wrong event");
  // const val: string = el.value;
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
}
