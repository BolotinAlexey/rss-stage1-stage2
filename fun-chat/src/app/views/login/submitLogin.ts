import { User } from "../../interfaces/user";
import createWebSocket from "../../utils/createWebSocket";
import isValidUser from "./isValidUser";

export default function submitLogin(e: Event) {
  e.preventDefault();

  if (!(e.currentTarget instanceof HTMLFormElement)) return;
  const formData = e.currentTarget.elements;
  const userObj: User | object = Object.values(formData).reduce((a, b) => {
    if (!(b instanceof HTMLInputElement)) return a;
    if (b.tagName === "INPUT") return { ...a, [b.name]: b.value };
    return a;
  }, {});

  if (!isValidUser(userObj)) {
    return;
  }
  e.currentTarget.reset();

  ["login", "password", "submit"].forEach((subclass) => {
    const el = document.querySelector(`.login__input-${subclass}`);
    if (el && el.classList && el.classList.contains("correct"))
      el.classList.remove("correct");
    if (el instanceof HTMLButtonElement && !el.disabled) el.disabled = true;
  });

  createWebSocket(userObj);
}