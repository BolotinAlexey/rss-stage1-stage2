import DataCar from "../interfaces/dataCar";
import DataWinner from "../interfaces/dataWinner";
import { ICar } from "../interfaces/responseData";

export default class ApiCars {
  address: string = "http://127.0.0.1:3000";

  async getCars(num: number = 1): Promise<ICar[]> {
    const res: Response = await fetch(
      `${this.address}/garage?_page=${num}&_limit=7`,
    );
    const content: ICar[] = await res.json();
    return content;
  }

  async getCount(namePage: "garage" | "winners") {
    const res: Response = await fetch(`${this.address}/${namePage}`);
    const content = await res.json();
    return content.length ? content.length : 0;
  }

  async createCar(dataCar: DataCar) {
    const res: Response = await fetch(`${this.address}/garage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCar),
    });
    return res.json();
  }

  async createWinner(dataWinner: DataWinner) {
    const res: Response = await fetch(`${this.address}/winner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataWinner),
    });
    return res.json();
  }
}
