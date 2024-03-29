import { ADDRESS, CARS_PER_WINNERS_PAGE } from "../constants/index";
import DataWinner from "../interfaces/dataWinner";
import Sort from "../interfaces/sort";

export default class ApiWinners {
  static async getWinners(
    num: number = 1,
    sort: Sort = "id",
    isAsc: boolean = true,
  ): Promise<DataWinner[]> {
    const res: Response = await fetch(
      `${ADDRESS}/winners?_page=${num}&_limit=${CARS_PER_WINNERS_PAGE}`,
    );
    const content: DataWinner[] = await res.json();
    return content;
  }

  static async getAllWinners(): Promise<DataWinner[]> {
    const res: Response = await fetch(`${ADDRESS}/winners`);
    const content: ICar[] = await res.json();
    return content;
  }

  static async getCount(namePage: "garage" | "winners") {
    const res: Response = await fetch(`${ADDRESS}/${namePage}`);
    const content = await res.json();
    return content.length ? content.length : 0;
  }

  static async removeWinner(id: number) {
    const res: Response = await fetch(`${ADDRESS}/garage/${id}`, {
      method: "DELETE",
    });
    console.log(`remove: ${res.ok}`);
  }

  static async updateWinner(car: ICar | null) {
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

  async createWinner(dataWinner: DataWinner) {
    const res: Response = await fetch(`${ADDRESS}/winner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataWinner),
    });
    return res.json();
  }
}
