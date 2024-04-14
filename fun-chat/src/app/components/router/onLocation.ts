import loginPage from "../../pages/login/index";
import routePaths from "./routhePaths";

export default function onLocation() {
  // const path: string = window.location.pathname;
  // const body = getElementDocument("body");
  let path: string = window.location.pathname;
  console.log(path);
  if (!routePaths.includes(path)) return;
  if (path === "/") path = "/auth";
  window.history.pushState({}, "", path);
  console.log(path);

  switch (path) {
    case "/auth":
      loginPage();
      break;

    default:
      break;
  }
}
