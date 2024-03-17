import { createElement } from "./supFunctions";

export default function createContinueButton(
  container: HTMLElement,
  nameButton: string,
): HTMLButtonElement {
  const btn: HTMLElement = createElement(
    "button",
    ["button", `game__btn-${nameButton}`],
    nameButton,
  );

  if (!(btn instanceof HTMLButtonElement))
    throw new Error("button is not button");
  btn.disabled = true;
  container.append(btn);
  return btn;
}
