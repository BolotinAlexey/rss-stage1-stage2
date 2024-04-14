import { User } from "../interfaces/user";

export default class SessionStorageAPI {
  static getUser(): User | null {
    const user = sessionStorage.getItem("user");
    if (!user) return null;
    return JSON.parse(user);
  }

  static setUser(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
}
