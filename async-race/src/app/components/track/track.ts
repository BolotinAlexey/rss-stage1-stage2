import IPage from "../../interfaces/IPage";
import { ICar } from "../../interfaces/responseData";
import ApiCars from "../../services/apiCars";
import createCarMarkup from "../../utils/createCarMarkup";
// // eslint-disable-next-line import/no-cycle
// import { Garage } from "../../pages/index";
import View from "../../views/view";
import "./style.scss";

export default class Track extends View {
  // garage: Garage;
  cars: ICar[] = [];

  page: IPage;

  constructor(page: IPage) {
    super({ tag: "div", class: ["track"], text: "" });
    // if (!(page instanceof Garage))
    //   throw new Error("'Page' isn't instanceof 'Garage'");
    // this.garage = page;
    // page.getCars.forEach((car: ICar) => {
    //   console.log(car);
    // });
    this.page = page;
    this.loadCars();
  }

  async loadCars() {
    const apiCars = new ApiCars();
    this.cars = await apiCars.getCars(this.page.num);
    this.refreshCars();
  }

  async refreshCars() {
    this.getHTMLElement().innerHTML = "";
    console.log(this.cars);

    this.cars.forEach((car: ICar) => {
      const road = createCarMarkup(car);
      this.getHTMLElement().append(road);
    });
  }
}
