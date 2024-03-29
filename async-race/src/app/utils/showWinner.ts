import { TIME_SHOW_WINNER, TIME_SHOW_WINNER_OPCITY } from "../constants/index";
import { createElement, getElementDocument } from "../services/supFunctions";

export default function showWinner(name: string) {
  const winnerTitle = createElement(
    "h4",
    ["winner-title"],
    `Winner is ${name}`,
  );
  setTimeout(() => winnerTitle.classList.add("show"), TIME_SHOW_WINNER_OPCITY);
  getElementDocument("body").append(winnerTitle);
  setTimeout(() => winnerTitle.remove(), TIME_SHOW_WINNER);
  setTimeout(
    () => winnerTitle.classList.remove("show"),
    TIME_SHOW_WINNER - TIME_SHOW_WINNER_OPCITY,
  );
}
