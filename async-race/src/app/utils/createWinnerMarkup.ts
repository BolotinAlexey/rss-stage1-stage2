import Row from "../components/row/row";
import Table from "../components/table/table";
import { DataWinner } from "../interfaces/dataWinner";

export default function createWinnerMarkup(
  winner: DataWinner,
  table: Table,
  i: number,
): HTMLTableRowElement {
  const row = new Row(winner, i);
  return row.getHTMLElement();
}
