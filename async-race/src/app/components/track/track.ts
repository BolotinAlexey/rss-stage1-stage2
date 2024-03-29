import { ICar } from "../../interfaces/responseDataCar";
import ITrack from "../../interfaces/track";
import { Garage } from "../../pages/index";
import ApiCars from "../../services/apiCars";
import StoreTrack from "../../store/track";
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
    if (!this.cars.length && this.page.num > 1) {
      if (StoreTrack.getTrack && StoreTrack.getTrack.page instanceof Page)
        StoreTrack.getTrack.page.setNum = this.page.num - 1;
      // Gar
      // this.page.num = this.page.num - 1;
      // this.loadCars();
    }
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
