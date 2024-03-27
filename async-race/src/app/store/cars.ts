import { ICar } from "../interfaces/responseData";
import StoreTrack from "./track";

export default class StoreCars {
  static car: ICar | null = null;

  public static set setCar(car: ICar) {
    this.car = car;
    const track = StoreTrack.getTrack;
    if (track) track.loadCars();
  }

  public static get getCar(): ICar | null {
    return this.car;
  }
}
