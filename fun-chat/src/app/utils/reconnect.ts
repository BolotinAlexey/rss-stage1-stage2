import onLocation from "../components/router/onLocation";
import { DELAY_RECONNECT } from "../constants/index";
import { User } from "../interfaces/user";
import SessionStorageAPI from "../services/sessionStorageApi";
import UserStore from "../store/userStore/index";
import createWebSocket from "./createWebSocket";

export default function reconnect(user: User) {
  const sessionStorageUser = SessionStorageAPI.getUser;
  if (!sessionStorageUser) {
    onLocation();
    return;
  }
  UserStore.setIntervallId = window.setInterval(
    () => createWebSocket(user),
    DELAY_RECONNECT,
  );
}
