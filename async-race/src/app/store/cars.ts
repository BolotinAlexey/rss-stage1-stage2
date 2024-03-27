import { ICar } from "../interfaces/responseData";

export default class StoreCars {
  static car: ICar | null = null;

  public static set setCar(car: ICar) {
    this.car = car;
    // this.track.loadCars();
  }

  public static get getCar(): ICar | null {
    return this.car;
  }
}
