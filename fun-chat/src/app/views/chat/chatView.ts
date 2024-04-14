import { User } from "../../interfaces/user";
import View from "../views";

export default class Chat extends View {
  user: User | null = null;

  constructor(user: User) {
    super({
      tag: "main",
      class: ["main", "chat"],
      text: "",
    });
    this.user = user;
  }
}
