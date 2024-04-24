import checkboxBurger from "../../components/checkboxBurger/checkboxBurger";
import { User } from "../../interfaces/user";
import generateFooter from "../../markups/footer";
import SessionStorageAPI from "../../services/sessionStorageApi";
import onSearchUser from "../../utils/onSearchUser";
import { getElementDocument } from "../../utils/supFunctions";
import Chat from "../../views/chat/chatView";
import createMessagesSection from "../../views/chat/createMessagesSection";
import createUsersSection from "../../views/chat/createUsersSection";
import createHeader from "../../views/header/createHeader";

const body = getElementDocument("body");
export default function chatPage() {
  const user: User | null = SessionStorageAPI.getUser;

  if (!user) return;

  const chatView = new Chat(user);
  window.history.pushState({}, "", `#/chat`);
  body.innerHTML = "";
  const headerHtml: HTMLElement = createHeader(user);
  body.append(headerHtml);
  chatView
    .getHTMLElement()
    .append(createUsersSection(), createMessagesSection());
  body.append(chatView.getHTMLElement());
  body.insertAdjacentHTML("beforeend", generateFooter());

  onSearchUser();
  checkboxBurger();
}
