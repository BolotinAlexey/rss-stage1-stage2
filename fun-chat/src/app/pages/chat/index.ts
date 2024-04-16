import { User } from "../../interfaces/user";
import generateFooter from "../../markups/footer";
import RouteStore from "../../store/routeStore/index";
import { getElementDocument } from "../../utils/supFunctions";
import Chat from "../../views/chat/chatView";
import createHeader from "../../views/header/createHeader";

const body = getElementDocument("body");
export default function chatPage(user: User | null) {
  if (!user) {
    RouteStore.setPage = "/chat";
    return;
  }
  const chatView = new Chat(user);
  body.innerHTML = "";
  const headerHtml: HTMLElement = createHeader(user);
  chatView.getHTMLElement().append(headerHtml);
  body.append(chatView.getHTMLElement());
  body.insertAdjacentHTML("beforeend", generateFooter());
}
