import { createElement, getElementDocument } from "../../utils/supFunctions";

export default function checkboxBurger() {
  const label = createElement<HTMLLabelElement>(
    "label",
    ["burger__label"],
    "⮕",
  );
  const checkBox = createElement<HTMLInputElement>("input", ["burger__input"]);
  checkBox.type = "checkbox";
  label.append(checkBox);
  const chat = getElementDocument(".chat");
  chat.append(label);
}
