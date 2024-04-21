// import { getElementDocument } from "./supFunctions";

import SessionStorageAPI from "../services/sessionStorageApi";
import RouteStore from "../store/routeStore/index";
import WSStore from "../store/wsStore/index";

export default function logout() {
  SessionStorageAPI.removeUser();
  RouteStore.setPage = "/auth";
  WSStore.ws?.close();
  WSStore.setWS = null;

  // const header: HTMLElement = getElementDocument("header");
  // const login: HTMLElement = getElementDocument(".login");
  // if (header.classList.contains("show")) header.classList.remove("show");
}
