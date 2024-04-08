import { ADDRESS, CARS_PER_PAGE, StatusCode } from "../constants/index";
import DataCar from "../interfaces/dataCar";
import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseDataCar";
import StoreCars from "../store/cars";

export default class ApiCars {
  static async getCars(num: number = 1): Promise<ICar[]> {
    try {
      const res: Response = await fetch(
        `${ADDRESS}/garage?_page=${num}&_limit=${CARS_PER_PAGE}`,
      );
      const content: ICar[] = await res.json();
      return content;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getAllCars(): Promise<ICar[]> {
    try {
      const res: Response = await fetch(`${ADDRESS}/garage`);
      const content: ICar[] = await res.json();
      return content;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getCount(namePage: "garage" | "winners"): Promise<number> {
    try {
      const res: Response = await fetch(`${ADDRESS}/${namePage}`);
      const content = await res.json();
      return content.length;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  static async createCar(dataCar: DataCar): Promise<ICar | null> {
    try {
      const res: Response = await fetch(`${ADDRESS}/garage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCar),
      });
      return await res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async removeCar(id: number): Promise<void> {
    try {
      const res: Response = await fetch(`${ADDRESS}/garage/${id}`, {
        method: "DELETE",
      });
      console.log(`remove: ${res.ok}`);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCar(car: ICar | null): Promise<void> {
    try {
      if (!car) return;
      const res: Response = await fetch(`${ADDRESS}/garage/${car.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: car.name, color: car.color }),
      });
      console.log(`update: ${res.ok}`);
    } catch (error) {
      console.log(error);
    }
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
    try {
      if (!car) return null;
      const res: Response = await fetch(
        `${ADDRESS}/engine?id=${car.id}&status=drive`,
        {
          signal: StoreCars.controller.signal,
          method: "PATCH",
        },
      );
      if (!res || typeof res.status !== "number") return null;
      return res.status;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async getCar(id: number): Promise<ICar | undefined> {
    try {
      const res: Response = await fetch(`${ADDRESS}/garage/${id}`);
      console.log(`getCar: ${res.ok}`);
      return await res.json();
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
