import { User } from "./app/interfaces/index";
import login from "./app/pages/login/login";
import welcome from "./app/pages/welcome/welcome";
import ApiLS from "./app/services/apiLocalStorage";
import createHeader from "./app/utils/createHeader";
import { getElementDocument } from "./app/utils/supFunctions";

const apiLS = new ApiLS();
const body: HTMLBodyElement = getElementDocument("body");

const user: User | null = apiLS.isUser() ? apiLS.getUser() : null;
const loginPage: HTMLElement = login();
const welcomePage: HTMLElement = welcome();
const header: HTMLElement = createHeader(user);
body.append(header, loginPage, welcomePage);

if (apiLS.isUser()) {
  if (!welcomePage.classList.contains("show"))
    welcomePage.classList.add("show");
  if (!header.classList.contains("show")) header.classList.add("show");
  if (loginPage.classList.contains("show")) loginPage.classList.remove("show");
} else {
  if (!loginPage.classList.contains("show")) loginPage.classList.add("show");
  if (welcomePage.classList.contains("show"))
    loginPage.classList.remove("show");
}
