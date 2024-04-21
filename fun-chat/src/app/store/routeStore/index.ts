import routePaths from "../../components/router/routhePaths";
import chatPage from "../../pages/chat/index";
import loginPage from "../../pages/login/index";

export default class RouteStore {
  private static path: string = window.location.pathname;

  public static get getPage(): string {
    return this.path;
  }

  public static set setPage(path: string) {
    if (!routePaths.includes(path)) return;
    this.path = path;
    window.history.pushState({}, "", path);
    this.choosePage(path);
  }

  private static choosePage(path: string) {
    switch (path) {
      case "/":
        loginPage();
        break;

      case "/chat":
        chatPage();
        break;

      default:
        loginPage();
        break;
    }
  }
}
