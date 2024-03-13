import { User } from "../interfaces/index";
import showUserName from "./showUserName";

export default function showWelcomePage(userObj: User) {
  const welcomePage = document.querySelector(".welcome");
  const header = document.querySelector(".header");
  const bgImg = document.querySelector(".bg-image-welcome");

  if (welcomePage) {
    welcomePage.classList.add("show");
  }
  if (header && !header.classList.contains("show"))
    header.classList.add("show");
  if (bgImg && !bgImg.classList.contains("show")) bgImg.classList.add("show");
  const loginPage = document.querySelector(".login");
  if (loginPage && loginPage.classList.contains("show"))
    loginPage.classList.remove("show");

  showUserName(userObj);
}
