import { ICar } from "../interfaces/responseDataCar";
import StoreTrack from "./track";

export default class StoreCars {
  static car: ICar | null = null;

  static controller = new AbortController();

  // static cars: ICar[] | [] = null;

  public static set setCar(car: ICar) {
    this.car = car;
    const track = StoreTrack.getTrack;
    if (track) track.loadCars();
  }

  public static get getCar(): ICar | null {
    return this.car;
  }
}
