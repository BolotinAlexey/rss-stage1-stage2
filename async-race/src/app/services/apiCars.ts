import { ADDRESS, CARS_PER_PAGE } from "../constants/index";
import DataCar from "../interfaces/dataCar";
import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseData";

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
    if (!car) return;
    const res: Response = await fetch(
      `${ADDRESS}/engine?id=${car.id}&status=${status}`,
      {
        method: "PATCH",
      },
    );
    console.log(`${status}: ${res.ok}`);
    return res.json();
  }
}
