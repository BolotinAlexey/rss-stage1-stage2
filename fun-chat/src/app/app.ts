import onLocation from "./components/router/onLocation";

export default class App {
  static createView() {
    window.addEventListener("load", onLocation);
    window.addEventListener("hashchange", onLocation);
  }
}
