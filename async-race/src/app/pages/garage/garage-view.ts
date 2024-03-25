import Page from "../../components/page/page";
import { ICar } from "../../interfaces/responseData";
import ApiCars from "../../services/apiCars";
import refreshCars from "./refreshCars";

export default class Garage extends Page {
  private cars: ICar[] = [];

  apiCars = new ApiCars();

  constructor() {
    super("garage");
  }

  public set setCars(v: ICar[]) {
    this.cars = v;
    this.count = this.cars.length;
    refreshCars(this);
  }
}
