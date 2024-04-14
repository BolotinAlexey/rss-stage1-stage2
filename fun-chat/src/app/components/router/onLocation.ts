import { BASE_URL } from "../../constants/index";
import loginPage from "../../pages/login/index";
import routePaths from "./routhePaths";

export default function onLocation() {
  // const path: string = window.location.pathname;
  // const body = getElementDocument("body");
  const fullPath: string = window.location.pathname;
  let path: string = fullPath.replace(BASE_URL, "");
  console.log(path + "ds");
  if (!routePaths.includes(path)) return;
  if (path === "/") path = `/auth`;
  window.history.pushState({}, "", fullPath);
  console.log(path + "aa");

  switch (path) {
    case "/auth":
      loginPage();
      break;

    default:
      break;
  }
}
