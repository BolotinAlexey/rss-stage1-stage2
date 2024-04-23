import { API_URL } from "../constants/index";
import { User } from "../interfaces/user";
import WSApi from "../services/wsApi";
import UserStore from "../store/userStore/index";
import WSStore from "../store/wsStore/index";
import saveUser from "../views/login/saveUser";
import notify from "./notify";
import reconnect from "./reconnect";
import routeWsMessage from "./routeWsMessage";

export default function createWebSocket(user: User) {
  WSStore.setWS = new WebSocket(API_URL);
  const ws = WSStore.getWS;
  if (ws)
    ws.addEventListener("open", () => {
      UserStore.isConnect = true;
      window.clearInterval(UserStore.setIntervallId);
      const notifyHtml: Element | null = document.querySelector(".notify-wrap");
      if (notifyHtml) notifyHtml.remove();
      ws.addEventListener("close", () => {
        WSStore.setWS = null;
        UserStore.isConnect = false;
        notify("Connecting...", false, true);
        reconnect(user);
      });
      saveUser(user);
      WSApi.authUser(user);
      WSStore.getWS?.addEventListener("message", routeWsMessage);
    });
}
