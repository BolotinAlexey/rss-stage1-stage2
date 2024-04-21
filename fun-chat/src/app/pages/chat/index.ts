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
export default function chatPage() {
  const user: User | null = SessionStorageAPI.getUser;
  if (!user) return;

  const chatView = new Chat(user);

  if (WSStore.getWS)
    WSStore.getWS.addEventListener("open", () => {
      WSApi.authUser(user);
      window.history.pushState({}, "", `#/chat`);
      body.innerHTML = "";
      const headerHtml: HTMLElement = createHeader(user);
      body.append(headerHtml);
      chatView.getHTMLElement().append(createUsersSection());
      body.append(chatView.getHTMLElement());
      body.insertAdjacentHTML("beforeend", generateFooter());
      WSApi.usersActive();
      WSApi.usersPassive();
      onSearchUser();
      WSStore.getWS?.addEventListener("message", routeWsMessage);
    });
}
