import { User } from "../../interfaces/user";
import chatPage from "../../pages/chat/index";
// import RouteStore from "../../store/routeStore/index";
import isValidUser from "./isValidUser";
import saveUser from "./saveUser";

export default function submitLogin(e: Event) {
  e.preventDefault();

  if (!(e.currentTarget instanceof HTMLFormElement)) return;
  const formData = e.currentTarget.elements;
  const userObj: User | object = Object.values(formData).reduce((a, b) => {
    if (!(b instanceof HTMLInputElement)) return a;
    if (b.tagName === "INPUT") return { ...a, [b.name]: b.value };
    return a;
  }, {});

  // const apiUser = new ApiLS();
  if (!isValidUser(userObj)) {
    return;
  }

  e.currentTarget.reset();
  ["name", "password", "submit"].forEach((subclass) => {
    const el = document.querySelector(`.login__input-${subclass}`);
    if (el && el.classList && el.classList.contains("correct"))
      el.classList.remove("correct");
    if (el instanceof HTMLButtonElement && !el.disabled) el.disabled = true;
  });
  saveUser(userObj);
  // RouteStore.setPage = "/chat";
  chatPage(userObj);
}
