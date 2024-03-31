import Button from "../components/button/button";
// eslint-disable-next-line import/no-cycle
import Table from "../components/table/table";
import arrowSvg from "../markups/arrowSvg";
import StoreTable from "../store/table";
import StoreWinners from "../store/winners";

function onArrowBtn(e: Event, name: "Wins" | "Best_time") {
  StoreTable.sort = name === "Wins" ? "wins" : "time";
  StoreTable.order = StoreTable.order === "ASC" ? "DESC" : "ASC";
  const table: Table | null = StoreWinners.getTable;
  if (table) table.loadWinners();
}

export default function createArrowBtn(
  name: "Wins" | "Best_time",
): HTMLButtonElement {
  const btn = new Button(`table__arrow`, "", (e: Event) => onArrowBtn(e, name));
  btn.getHTMLElement().insertAdjacentHTML("beforeend", arrowSvg());
  return btn.getHTMLElement();
}
