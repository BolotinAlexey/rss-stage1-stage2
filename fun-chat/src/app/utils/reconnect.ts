import { DELAY_RECONNECT } from "../constants/index";
import { User } from "../interfaces/user";
import UserStore from "../store/userStore/index";
import createWebSocket from "./createWebSocket";

export default function reconnect(user: User) {
  UserStore.setIntervallId = window.setInterval(
    () => createWebSocket(user),
    DELAY_RECONNECT,
  );
}
