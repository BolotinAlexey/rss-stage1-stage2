import { DataWinner } from "../../interfaces/dataWinner";
import Sort from "../../interfaces/sort";
import { Winners } from "../../pages/index";
import ApiWinners from "../../services/apiWinners";
import StoreWinners from "../../store/winners";
import createThead from "../../utils/createThead";
import createWinnerMarkup from "../../utils/createWinnerMarkup";
import refreshTitles from "../../utils/refreshTitles";
import View from "../../views/view";
import Page from "../page/page";

export default class Table extends View {
  page: Page;

  winners: DataWinner[] = [];

  constructor(page: Page) {
    super({ tag: "table", class: ["table"], text: "" });
    this.page = page;
    this.loadWinners();
    return this;
  }

  async loadWinners() {
    this.winners = await ApiWinners.getWinners(this.page.num);
    if (!this.winners.length && this.page.num > 1) {
      if (StoreWinners.getTable && StoreWinners.getTable.page instanceof Page)
        StoreWinners.getTable.page.setNum = this.page.num - 1;
    }
    this.refreshWinners();
  }

  async refreshWinners() {
    this.getHTMLElement().innerHTML = "";
    createThead(this.getHTMLElement());

    this.winners.forEach((winner: DataWinner, i: number) => {
      const index = (this.page.getNum - 1) * 10 + i;
      const row = createWinnerMarkup(winner, this, index);
      this.getHTMLElement().append(row);
    });
    this.page.count = await ApiWinners.getCount("winners");
    refreshTitles(this.page);
  }

  public getHTMLElement(): HTMLTableElement {
    if (!(this.element instanceof HTMLTableElement))
      throw new Error(`${this.element} isn't HTMLTableElement`);
    return this.element;
  }
}
