import { User } from "../../interfaces/index";
import ApiLS from "../../services/apiLocalStorage";
import createHeader from "../../utils/createHeader";
import "./style.scss";

export default function welcome() {
  const body: HTMLBodyElement = document.querySelector("body");
  const apiLS = new ApiLS();
  const user: User = apiLS.getUser();
  body.append(createHeader(user));
}
