import Page from "../../components/page/page";
import Table from "../../components/table/table";
import StoreWinners from "../../store/winners";
import "./style.scss";

export default class Winners extends Page {
  table: Table | null = null;

  constructor() {
    super("winners");
    StoreWinners.setTable = new Table(this);
    const table = StoreWinners.getTable;
    if (table) this.getHTMLElement().append(table.getHTMLElement());
  }
}
