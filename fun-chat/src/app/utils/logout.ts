import onLocation from "../components/router/onLocation";
import SessionStorageAPI from "../services/sessionStorageApi";
import WSStore from "../store/wsStore/index";

export default function logout() {
  SessionStorageAPI.removeUser();
  window.history.pushState({}, "", `#auth`);
  onLocation();
  WSStore.ws?.close();
  WSStore.setWS = null;
}
