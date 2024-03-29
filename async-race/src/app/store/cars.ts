import { ICar } from "../interfaces/responseDataCar";
import StoreTrack from "./track";

export default class StoreCars {
  static car: ICar | null = null;

  // static cars: ICar[] | [] = null;

  public static set setCar(car: ICar) {
    this.car = car;
    const track = StoreTrack.getTrack;
    if (track) track.loadCars();
  }

  public static get getCar(): ICar | null {
    return this.car;
  }

  //   public static set setCars(cars: ICar[]) {
  //   this.cars = cars;
  //   this.count = this.cars.length;
  //   refreshTitles(this);
  // }

  // public static get getCars(): ICar[] {
  //   return this.cars;
  // }
}
