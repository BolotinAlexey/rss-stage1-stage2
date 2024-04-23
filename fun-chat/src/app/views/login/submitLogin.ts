import { API_URL } from "../../constants/index";
import { User } from "../../interfaces/user";
import WSApi from "../../services/wsApi";
import UserStore from "../../store/userStore/index";
import WSStore from "../../store/wsStore/index";
import routeWsMessage from "../../utils/routeWsMessage";
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

  WSStore.setWS = new WebSocket(API_URL);
  const ws = WSStore.getWS;
  if (ws)
    ws.addEventListener("open", () => {
      UserStore.isConnect = true;
      ws.addEventListener("close", () => {
        UserStore.isConnect = false;
      });
      saveUser(userObj);
      WSApi.authUser(userObj);
      WSStore.getWS?.addEventListener("message", routeWsMessage);
    });
}
