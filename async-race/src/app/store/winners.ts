import Table from "../components/table/table";
import { Winners } from "../pages/index";

export default class StoreWinners {
  static winners: Winners | null = null;

  static table: Table | null = null;

  static set setWinners(winners: Winners) {
    this.winners = winners;
  }

  public static get getWinners(): Winners | null {
    return this.winners;
  }

  static set setTable(table: Table) {
    this.table = table;
  }

  public static get getTable(): Table | null {
    return this.table;
  }
}
