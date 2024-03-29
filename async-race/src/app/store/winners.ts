import { Winners } from "../pages/index";

export default class StoreWinners {
  static winners: Winners | null = null;

  static set setWinners(winners: Winners) {
    this.winners = winners;
  }

  public static get getWinners(): Winners | null {
    return this.winners;
  }
}
