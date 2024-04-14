import { BASE_URL } from "../../constants/index";
import loginPage from "../../pages/login/index";
import RouteStore from "../../store/routeStore/index";
import routePaths from "./routhePaths";

export default function onLocation() {
  // const path: string = window.location.pathname;
  // const body = getElementDocument("body");
  const fullPath: string = window.location.pathname;
  let path: string = fullPath.replace(BASE_URL, "");
  if (!routePaths.includes(path)) return;
  if (path === "/") path = `/auth`;
  window.history.pushState({}, "", fullPath);

  switch (path) {
    case "/auth":
      RouteStore.setPage = path;
      loginPage();
      break;

    default:
      break;
  }
}
