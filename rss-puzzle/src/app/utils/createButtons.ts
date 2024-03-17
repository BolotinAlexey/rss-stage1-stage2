import createButton from "./createButton";
import { createElement } from "./supFunctions";

export default function createButtons(game: HTMLElement) {
  const buttonsWrap = createElement("div", ["game__buttons-wrap"]);
  const buttonsCheckContinuesWrap = createElement("div", [
    "game__check-continue-wrap",
  ]);
  const autoCompleteBtn = createButton(buttonsWrap, "auto-complete");
  autoCompleteBtn.disabled = false;
  const continueBtn = createButton(buttonsCheckContinuesWrap, "continue");
  const checkBtn = createButton(buttonsCheckContinuesWrap, "check");

  buttonsWrap.append(buttonsCheckContinuesWrap);
  game.append(buttonsWrap);
  return { continueBtn, checkBtn, autoCompleteBtn };
}
