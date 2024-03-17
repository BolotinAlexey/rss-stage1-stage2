import createContinueButton from "./createContinueButton";
import { createElement } from "./supFunctions";

export default function createButtons(game: HTMLElement) {
  const buttonsWrap = createElement("div", ["game__buttons-wrap"]);
  const continueBtn = createContinueButton(buttonsWrap, "continue");
  const checkBtn = createContinueButton(buttonsWrap, "check");
  game.append(buttonsWrap);
  return { continueBtn, checkBtn };
}
