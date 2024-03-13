import { User } from "../interfaces/index";
import isValidUser from "../utils/isValidUser";
import updateHeader from "../utils/updateHeader";
import ApiLS from "./apiLocalStorage";
import showWelcomePage from "./showWelcomePage";

export default function submitLogin(e: Event) {
  e.preventDefault();

  if (!(e.currentTarget instanceof HTMLFormElement)) return;
  const formData = e.currentTarget.elements;
  const userObj: User | {} = Object.values(formData).reduce((a, b) => {
    if (!(b instanceof HTMLInputElement)) return a;
    if (b.tagName === "INPUT") return { ...a, [b.name]: b.value };
    return a;
  }, {});
  const apiUser = new ApiLS();
  if (!isValidUser(userObj)) {
    return;
  }
  apiUser.setUser(userObj);
  updateHeader(userObj);

  e.currentTarget.reset();
  ["name", "surname", "submit"].forEach((subclass) => {
    const el = document.querySelector(`.login__input-${subclass}`);
    if (el && el.classList && el.classList.contains("correct"))
      el.classList.remove("correct");
    if (el instanceof HTMLButtonElement && !el.disabled) el.disabled = true;
  });
  showWelcomePage(userObj);
}
