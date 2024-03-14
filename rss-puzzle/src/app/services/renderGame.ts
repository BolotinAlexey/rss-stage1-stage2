import { createElement, getElementDocument } from "../utils/supFunctions";

export default function renderGame() {
  const body: HTMLBodyElement = getElementDocument("body");
  const game = createElement("div", ["page", "game", "container"]);
  const dataBlock = createElement("div", ["block", "data-block"]);
  const resultBlock = createElement("div", ["block", "result-block"]);
  game.append(resultBlock, dataBlock);
  body.append(game);
}
