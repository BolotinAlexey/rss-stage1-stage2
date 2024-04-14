// import { getElementDocument } from "./supFunctions";

import SessionStorageAPI from "../services/sessionStorageApi";
import RouteStore from "../store/routeStore/index";
import UserStore from "../store/userStore/index";

export default function logout() {
  UserStore.setUser = null;
  SessionStorageAPI.removeUser();
  RouteStore.setPage = "/auth";

  // const header: HTMLElement = getElementDocument("header");
  // const login: HTMLElement = getElementDocument(".login");
  // if (header.classList.contains("show")) header.classList.remove("show");
}
