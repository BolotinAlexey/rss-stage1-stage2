import SessionStorageAPI from "../services/sessionStorageApi";
import WSStore from "../store/wsStore/index";
import createWebSocket from "./createWebSocket";

export default function changeRoutePath(): string {
  const user = SessionStorageAPI.getUser;
  if (user && !WSStore.getWS) {
    createWebSocket(user);
  }
  return !user ? "/auth" : "/chat";
}
