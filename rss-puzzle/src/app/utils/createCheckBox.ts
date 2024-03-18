import { CheckBox } from "../interfaces/index";
import { createElement } from "./supFunctions";

export default function createCheckBox(nameInput: string): CheckBox {
  const checkBoxWrap = createElement("label", [
    "game__hint-wrap",
    `game__hint-wrap-${nameInput}`,
  ]);
  const checkBox: HTMLInputElement = createElement("input", [
    "game__hint",
    `game__hint-${nameInput}`,
  ]);
  checkBoxWrap.append(checkBox);

  if (!(checkBox instanceof HTMLInputElement))
    throw new Error("button is not button");
  checkBox.type = "checkbox";
  checkBox.checked = false;
  return { checkBoxWrap, checkBox };
}
