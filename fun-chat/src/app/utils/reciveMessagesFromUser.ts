import { IMessage } from "../interfaces/message";
import SessionStorageAPI from "../services/sessionStorageApi";
import UsersMsgsStore from "../store/usersMsgsStore.ts/index";
import UsersStore from "../store/usersStore/index";
import renderMessagesField from "./renderMessagesField";
import { createElement, getElementDocument } from "./supFunctions";

export default function reciveMessagesFromUser(msgs: IMessage[]) {
  let messages: IMessage[] = msgs;
  const currentUser = SessionStorageAPI.getUser?.login;
  const field = getElementDocument(".messages__field");
  const statusUserHtml = document.querySelector(".message__status-user");

  let otherUser: string | undefined = "";
  if (messages[0]) {
    otherUser = [messages[0].from, messages[0].to].find(
      (user) => user !== currentUser,
    );
  }

  if (otherUser) UsersMsgsStore.setUserMsgs(otherUser, messages);

  const unReadMsgsNumber = msgs.reduce((a: number, msg: IMessage) => {
    if (msg.from === otherUser && !msg.status.isReaded) return a + 1;
    return a;
  }, 0);
  if (otherUser && unReadMsgsNumber)
    UsersStore.setUnReadMsgs(otherUser, unReadMsgsNumber);

  if (
    !messages[0] &&
    statusUserHtml &&
    statusUserHtml.textContent &&
    UsersMsgsStore.getUserMsgs(statusUserHtml.textContent)
  ) {
    messages = UsersMsgsStore.getUserMsgs(
      statusUserHtml.textContent,
    ) as IMessage[];
  }

  if (!statusUserHtml && field) {
    field.innerHTML = "";
    field.append(
      createElement(
        "div",
        ["field__message-center"],
        "Select a user to communicate with..",
      ),
    );
    return;
  }

  if (statusUserHtml?.textContent) renderMessagesField();
}
