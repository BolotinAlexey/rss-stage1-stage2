// import { BASE_URL } from "../../constants/index";
import chatPage from "../../pages/chat/index";
import loginPage from "../../pages/login/index";
import changeRoutePath from "../../utils/changeRoutePath";
import routePaths from "./routhePaths";

export default function onLocation() {
  const hash = window.location.hash.slice(1);
  let path = hash || "/auth";

  if (!routePaths.includes(path) || path === "/chat") path = changeRoutePath();
  window.history.pushState({}, "", `#${path}`);

  switch (path) {
    case "/auth":
      loginPage();
      break;

    // case "/chat":
    //   chatPage();
    //   break;

    default:
      break;
  }
}
