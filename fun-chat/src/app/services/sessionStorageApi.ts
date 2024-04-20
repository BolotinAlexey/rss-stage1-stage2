import { User } from "../interfaces/user";

export default class SessionStorageAPI {
  static get getUser(): User | null {
    const user = sessionStorage.getItem("user");
    if (!user) return null;
    return JSON.parse(user);
  }

  static set setUser(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  static removeUser() {
    sessionStorage.removeItem("user");
  }
}
