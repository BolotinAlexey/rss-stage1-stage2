import { ADDRESS, CARS_PER_WINNERS_PAGE, StatusCode } from "../constants/index";
import { DataWinner } from "../interfaces/dataWinner";
import StoreTable from "../store/table";

export default class ApiWinners {
  static async getWinners(num: number = 1): Promise<DataWinner[]> {
    const res: Response = await fetch(
      `${ADDRESS}/winners?_page=${num}&_limit=${CARS_PER_WINNERS_PAGE}&_sort=${StoreTable.sort}&_order=${StoreTable.order}`,
    );
    const content: DataWinner[] = await res.json();
    return content;
  }

  static async getAllWinners(): Promise<DataWinner[]> {
    try {
      const res: Response = await fetch(`${ADDRESS}/winners`);
      const content: DataWinner[] = await res.json();
      return content;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getCount(namePage: "garage" | "winners") {
    try {
      const res: Response = await fetch(`${ADDRESS}/${namePage}`);
      const content = await res.json();
      return content.length ? content.length : 0;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  static async getWinner(id: number): Promise<DataWinner | undefined> {
    let res: Response;
    try {
      res = await fetch(`${ADDRESS}/winners/${id}`);
    } catch (error) {
      console.log(error);
      return Promise.reject();
    }
    console.log(`getWinner: ${res.ok}`);
    const content: DataWinner = await res.json();
    return res.status === StatusCode.OK ? content : Promise.reject();
  }

  static async removeWinner(id: number) {
    try {
      const res: Response = await fetch(`${ADDRESS}/winners/${id}`, {
        method: "DELETE",
      });
      console.log(`remove: ${res.ok}`);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateWinner(winner: DataWinner | null) {
    try {
      if (!winner) return;
      const res: Response = await fetch(`${ADDRESS}/winners/${winner.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wins: winner.wins, time: winner.time }),
      });
      console.log(`updateWinner: ${res.ok}`);
    } catch (error) {
      console.log(error);
    }
  }

  static async createWinner(winner: DataWinner) {
    try {
      const res: Response = await fetch(`${ADDRESS}/winners`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(winner),
      });
      console.log("create winner: ", res.ok);
    } catch (error) {
      console.log(error);
    }
  }
}
