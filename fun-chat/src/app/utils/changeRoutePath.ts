import { API_URL } from "../constants/index";
import SessionStorageAPI from "../services/sessionStorageApi";
import WSApi from "../services/wsApi";
import WSStore from "../store/wsStore/index";

export default function changeRoutePath(): string {
  const user = SessionStorageAPI.getUser;
  if (user && !WSStore.getWS) {
    WSStore.setWS = new WebSocket(API_URL);
    const { ws } = WSStore;
    if (!ws) throw new Error("WebSocke didn't create");
    ws.addEventListener("open", () => {
      WSApi.authUser(user);
    });
  }
  return !user ? "/auth" : "/chat";
}
