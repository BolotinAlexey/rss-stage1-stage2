// import { BASE_URL } from "../../constants/index";
import chatPage from "../../pages/chat/index";
import loginPage from "../../pages/login/index";
import changeRoutePath from "../../utils/changeRoutePath";
import routePaths from "./routhePaths";

export default function onLocation() {
  // const path: string = window.location.pathname;
  // const body = getElementDocument("body");
  const hash = window.location.hash.slice(1);
  let path = hash || "/auth";
  // const fullPath: string = window.location.pathname;
  // let path: string = fullPath.replace(BASE_URL, "");
  if (!routePaths.includes(path) || path === "/chat") path = changeRoutePath();
  // if (path === "/") path = `#auth`;
  window.history.pushState({}, "", `#${path}`);

  switch (path) {
    case "/auth":
      loginPage();
      break;

    case "/chat":
      chatPage(null);
      break;

    default:
      break;
  }
}
