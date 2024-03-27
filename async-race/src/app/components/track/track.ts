import { ICar } from "../../interfaces/responseData";
import ApiCars from "../../services/apiCars";
import createCarMarkup from "../../utils/createCarMarkup";
// // eslint-disable-next-line import/no-cycle
// import { Garage } from "../../pages/index";
import View from "../../views/view";
import Page from "../page/page";
import "./style.scss";

export default class Track extends View {
  cars: ICar[] = [];

  page: Page;

  constructor(page: Page) {
    super({ tag: "div", class: ["track"], text: "" });
    this.page = page;
    this.loadCars();
  }

  async loadCars() {
    this.cars = await ApiCars.getCars(this.page.num);
    this.refreshCars();
  }

  async refreshCars() {
    this.getHTMLElement().innerHTML = "";

    this.cars.forEach((car: ICar) => {
      const road = createCarMarkup(car, this);
      this.getHTMLElement().append(road);
    });
  }
}
