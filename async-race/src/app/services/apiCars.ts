/* eslint-disable no-unsafe-finally */
import { ADDRESS, CARS_PER_PAGE, StatusCode } from "../constants/index";
import DataCar from "../interfaces/dataCar";
import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseDataCar";
import StoreCars from "../store/cars";

export default class ApiCars {
  static async getCars(num: number = 1): Promise<ICar[]> {
    const res: Response = await fetch(
      `${ADDRESS}/garage?_page=${num}&_limit=${CARS_PER_PAGE}`,
    );
    const content: ICar[] = await res.json();
    return content;
  }

  static async getAllCars(): Promise<ICar[]> {
    const res: Response = await fetch(`${ADDRESS}/garage`);
    const content: ICar[] = await res.json();
    return content;
  }

  static async getCount(namePage: "garage" | "winners") {
    const res: Response = await fetch(`${ADDRESS}/${namePage}`);
    const content = await res.json();
    return content.length ? content.length : 0;
  }

  static async createCar(dataCar: DataCar) {
    const res: Response = await fetch(`${ADDRESS}/garage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCar),
    });
    return res.json();
  }

  static async removeCar(id: number) {
    const res: Response = await fetch(`${ADDRESS}/garage/${id}`, {
      method: "DELETE",
    });
    console.log(`remove: ${res.ok}`);
  }

  static async updateCar(car: ICar | null) {
    if (!car) return;
    const res: Response = await fetch(`${ADDRESS}/garage/${car.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: car.name, color: car.color }),
    });

    console.log(`update: ${res.ok}`);
  }

  static async startStopCar(
    car: ICar | null,
    status: StatusEngine,
  ): Promise<ResponseEngine | void> {
    try {
      if (!car) throw new Error("Car don't exist");
      const res: Response = await fetch(
        `${ADDRESS}/engine?id=${car.id}&status=${status}`,
        {
          method: "PATCH",
          signal: StoreCars.controller.signal,
        },
      );
      console.log(`${status}: ${res.ok}`);
      return await res.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async driveCar(car: ICar | null): Promise<StatusCode | null> {
    if (!car) return null;
    let res: Response | null = null;
    try {
      res = await fetch(`${ADDRESS}/engine?id=${car.id}&status=drive`, {
        signal: StoreCars.controller.signal,
        method: "PATCH",
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (!res || typeof res.status !== "number") return null;
      return res.status;
    }
  }

  static async getCar(id: number): Promise<ICar | undefined> {
    const res: Response = await fetch(`${ADDRESS}/garage/${id}`);
    console.log(`getCar: ${res.ok}`);
    return res.json();
  }
}
