import { API_URL } from "../../constants/index";
import { User } from "../../interfaces/user";
import generateFooter from "../../markups/footer";
import SessionStorageAPI from "../../services/sessionStorageApi";
import WSApi from "../../services/wsApi";
import RouteStore from "../../store/routeStore/index";
import WSStore from "../../store/wsStore/index";
import { getElementDocument } from "../../utils/supFunctions";
import Chat from "../../views/chat/chatView";
import createHeader from "../../views/header/createHeader";

const body = getElementDocument("body");
export default function chatPage(user: User | null) {
  let fakeUser: User | null = user;
  if (!user) {
    fakeUser = SessionStorageAPI.getUser;
  }
  if (!fakeUser) return;
  console.log("chat done");

  const chatView = new Chat(fakeUser);
  WSStore.setWS = new WebSocket(API_URL);
  WSApi.authUser(fakeUser);
  window.history.pushState({}, "", `#/chat`);
  body.innerHTML = "";
  const headerHtml: HTMLElement = createHeader(user);
  chatView.getHTMLElement().append(headerHtml);
  body.append(chatView.getHTMLElement());
  body.insertAdjacentHTML("beforeend", generateFooter());
}
