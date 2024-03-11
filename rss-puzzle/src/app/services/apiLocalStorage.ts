import { User } from "../interfaces/index";

const KEY_USER = "user-puzzle";
export default class ApiLS {
  keyUser: string;

  constructor(keyUser: string = KEY_USER) {
    this.keyUser = keyUser;
  }

  isUser(): boolean {
    const data: string | null = localStorage.getItem(this.keyUser);
    return !!data;
  }

  getUser(): User {
    const user: string | null = localStorage.getItem(this.keyUser);
    if (!user) throw new Error("Don't find user");
    const usr: User = JSON.parse(user);
    return usr;
  }

  setUser(user: User): void {
    localStorage.setItem(this.keyUser, JSON.stringify(user));
  }
}
