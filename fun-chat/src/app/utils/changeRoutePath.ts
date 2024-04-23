import SessionStorageAPI from "../services/sessionStorageApi";
import WSStore from "../store/wsStore/index";
import createWebSocket from "./createWebSocket";

export default function changeRoutePath(): string {
  const user = SessionStorageAPI.getUser;
  if (user && !WSStore.getWS) {
    createWebSocket(user);
    // WSStore.setWS = new WebSocket(API_URL);
    // const { ws } = WSStore;
    // if (!ws) throw new Error("WebSocke didn't create");
    // ws.addEventListener("open", () => {
    //   UserStore.isConnect = true;
    //   ws.addEventListener("close", () => {
    //     UserStore.isConnect = false;
    //     if (user) reconnect(user);
    //   });
    //   WSApi.authUser(user);
    //   WSStore.getWS?.addEventListener("message", routeWsMessage);
    // });
  }
  return !user ? "/auth" : "/chat";
}
