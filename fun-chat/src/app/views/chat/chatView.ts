import { User } from "../../interfaces/user";
import View from "../views";
import "./footer.scss";
import "./style.sass";

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
