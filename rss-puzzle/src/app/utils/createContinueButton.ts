import { createElement } from "./supFunctions";

export default function createContinueButton(
  container: HTMLElement,
): HTMLButtonElement {
  const btn: HTMLElement = createElement(
    "button",
    ["button", "game__btn-continue"],
    "Continue",
  );

  if (!(btn instanceof HTMLButtonElement))
    throw new Error("button is not button");
  btn.disabled = true;
  container.append(btn);
  return btn;
}
