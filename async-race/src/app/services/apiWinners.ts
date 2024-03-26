import DataWinner from "../interfaces/dataWinner";

export default class ApiWinners {
  address: string = "http://127.0.0.1:3000";

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
