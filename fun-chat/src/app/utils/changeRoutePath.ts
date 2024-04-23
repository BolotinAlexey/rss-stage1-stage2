import { API_URL } from "../constants/index";
import SessionStorageAPI from "../services/sessionStorageApi";
import WSApi from "../services/wsApi";
import UserStore from "../store/userStore/index";
import WSStore from "../store/wsStore/index";
import routeWsMessage from "./routeWsMessage";

export default function changeRoutePath(): string {
  const user = SessionStorageAPI.getUser;
  if (user && !WSStore.getWS) {
    WSStore.setWS = new WebSocket(API_URL);
    const { ws } = WSStore;
    if (!ws) throw new Error("WebSocke didn't create");
    ws.addEventListener("open", () => {
      UserStore.isConnect = true;
      ws.addEventListener("close", () => {
        UserStore.isConnect = false;
      });
      WSApi.authUser(user);
      WSStore.getWS?.addEventListener("message", routeWsMessage);
    });
  }
  return !user ? "/auth" : "/chat";
}
