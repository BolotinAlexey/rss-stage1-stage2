import { createElement, getElementDocument } from "../utils/supFunctions";

export default function renderGame(): HTMLElement {
  const body: HTMLBodyElement = getElementDocument("body");
  const game = createElement("div", ["page", "game", "container"]);
  const dataBlockWrap = createElement("div", ["block-wrap", "data-block-wrap"]);

  const resultBlockWrap = createElement("div", [
    "block-wrap",
    "result-block-wrap",
  ]);
  const dataBlock = createElement("div", ["block", "data-block"]);
  const resultBlock = createElement("div", ["block", "result-block"]);
  const resultBlockHint = createElement("p", ["result-block__hint"]);
  dataBlockWrap.append(dataBlock);
  resultBlockWrap.append(resultBlockHint, resultBlock);
  game.append(resultBlockWrap, dataBlockWrap);
  body.append(game);
  return game;
}
