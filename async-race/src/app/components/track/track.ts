import { ICar } from "../../interfaces/responseData";
import ITrack from "../../interfaces/track";
import ApiCars from "../../services/apiCars";
import createCarMarkup from "../../utils/createCarMarkup";
import View from "../../views/view";
import Page from "../page/page";
import "./style.scss";

export default class Track extends View implements ITrack {
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
