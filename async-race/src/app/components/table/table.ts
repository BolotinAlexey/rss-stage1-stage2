import { DataWinner } from "../../interfaces/dataWinner";
import { Winners } from "../../pages/index";
import ApiWinners from "../../services/apiWinners";
import StoreWinners from "../../store/winners";
import createThead from "../../utils/createThead";
import createWinnerMarkup from "../../utils/createWinnerMarkup";
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
      // if (StoreWinners.getWinners && StoreWinners.getWinners.table instanceof Table)
      // StoreWinners.getTable?.page.setNum = this.page.num - 1;
    }
    this.refreshWinners();
  }

  async refreshWinners() {
    this.getHTMLElement().innerHTML = "";
    createThead(this.getHTMLElement());

    this.winners.forEach((winner: DataWinner) => {
      const row = createWinnerMarkup(winner, this);
      this.getHTMLElement().append(row);
    });
  }

  public getHTMLElement(): HTMLTableElement {
    if (!(this.element instanceof HTMLTableElement))
      throw new Error(`${this.element} isn't HTMLTableElement`);
    return this.element;
  }
}
