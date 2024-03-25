import DataCar from "../interfaces/dataCar";
import { ICar } from "../interfaces/responseData";

export default class ApiCars {
  address: string = "http://127.0.0.1:3000";

  async getCars(): Promise<ICar[]> {
    const res: Response = await fetch(`${this.address}/garage`);
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
}
