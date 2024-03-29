import { TIME_SHOW_WINNER } from "../constants/index";
import { createElement, getElementDocument } from "../services/supFunctions";

export default function showWinner(name: string) {
  const winnerTitle = createElement(
    "h4",
    ["winner-title"],
    `Winner is ${name}`,
  );
  getElementDocument("body").append(winnerTitle);
  setTimeout(() => winnerTitle.remove(), TIME_SHOW_WINNER);
}
