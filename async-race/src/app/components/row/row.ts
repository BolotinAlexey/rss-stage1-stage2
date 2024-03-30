import { DataWinner } from "../../interfaces/dataWinner";
import { ICar } from "../../interfaces/responseDataCar";
import carSvg from "../../markups/carSvg";
import ApiCars from "../../services/apiCars";
import { createElement } from "../../services/supFunctions";
import View from "../../views/view";

export default class Row extends View {
  constructor(winner: DataWinner, i: number) {
    super({ tag: "tr", class: ["table__tr"], text: "" });
    this.createRowMarkup(winner, i);
  }

  public async createRowMarkup(winner: DataWinner, i: number) {
    const car: ICar | undefined = await ApiCars.getCar(winner.id);
    if (!car) return;
    const carSpan: HTMLElement = createElement("div", [
      "table__td",
      `table__td_car`,
    ]);
    carSpan.insertAdjacentHTML("afterbegin", carSvg());
    carSpan.style.color = car.color;

    const name = createElement("td", ["table__td", `table__td_name`], car.name);
    const wins = createElement(
      "td",
      ["table__td", `table__td_wins`],
      winner.wins.toString(),
    );
    const time = createElement(
      "td",
      ["table__td", `table__td_wins`],
      winner.time.toString(),
    );
    const index = createElement(
      "td",
      ["table__td", `table__td_number`],
      (i + 1).toString(),
    );

    this.getHTMLElement().append(index, carSpan, name, wins, time);
  }

  public getHTMLElement(): HTMLTableRowElement {
    if (!(this.element instanceof HTMLTableRowElement))
      throw new Error("row isn't HTMLTableRowElement");
    return this.element;
  }
}
