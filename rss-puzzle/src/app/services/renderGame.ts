import { createElement, getElementDocument } from "../utils/supFunctions";

export default function renderGame() {
  const body: HTMLBodyElement = getElementDocument("body");
  const game = createElement("div", ["page", "game", "container"]);
  body.append(game);
}
