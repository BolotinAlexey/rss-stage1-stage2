import { getElementDocument } from "../utils/supFunctions";
import ApiLS from "./apiLocalStorage";

export default function logout() {
  const apiLS = new ApiLS();
  apiLS.delUser();
  const header: HTMLElement = getElementDocument("header");
  const login: HTMLDivElement = getElementDocument(".login");
  const welcome: HTMLDivElement = getElementDocument(".welcome");
  const bgImg: HTMLElement = getElementDocument(".bg-image-welcome");

  if (header.classList.contains("show")) header.classList.remove("show");
  if (!login.classList.contains("show")) login.classList.add("show");
  if (welcome.classList.contains("show")) welcome.classList.remove("show");
  if (bgImg.classList.contains("show")) bgImg.classList.remove("show");
  const game = getElementDocument(".game");
  game.remove();
}
