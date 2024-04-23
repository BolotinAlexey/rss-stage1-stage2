import { User } from "../../interfaces/user";

export default class UserStore {
  private static user: User | null = null;

  public static isConnect: boolean = false;

  public static setIntervallId: number = 0;

  public static get getUser(): User | null {
    return this.user;
  }

  public static set setUser(user: User | null) {
    this.user = user;
  }
}
