import { API_URL } from "../../constants/index";
import { User } from "../../interfaces/user";
import generateFooter from "../../markups/footer";
import SessionStorageAPI from "../../services/sessionStorageApi";
import WSApi from "../../services/wsApi";
import WSStore from "../../store/wsStore/index";
import onSearchUser from "../../utils/onSearchUser";
import routeWsMessage from "../../utils/routeWsMessage";
import { getElementDocument } from "../../utils/supFunctions";
import Chat from "../../views/chat/chatView";
import createUsersSection from "../../views/chat/createUsersSection";
import createHeader from "../../views/header/createHeader";

const body = getElementDocument("body");
export default function chatPage(user: User | null) {
  let fakeUser: User | null = user;
  if (!user) {
    fakeUser = SessionStorageAPI.getUser;
  }
  if (!fakeUser) return;

  const chatView = new Chat(fakeUser);
  WSStore.setWS = new WebSocket(API_URL);
  console.log(WSStore.getWS);

  if (WSStore.getWS)
    WSStore.getWS.addEventListener("open", () => {
      console.log("open");
      WSApi.authUser(fakeUser);
      window.history.pushState({}, "", `#/chat`);
      body.innerHTML = "";
      const headerHtml: HTMLElement = createHeader(fakeUser);
      body.append(headerHtml);
      chatView.getHTMLElement().append(createUsersSection());
      body.append(chatView.getHTMLElement());
      body.insertAdjacentHTML("beforeend", generateFooter());
      WSApi.usersActive();
      onSearchUser();
      WSStore.getWS?.addEventListener("message", routeWsMessage);
    });
}
