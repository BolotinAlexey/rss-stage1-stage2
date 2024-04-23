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
  let otherUser: string | undefined;
  let statusUser: string | undefined;
  if (statusUserHtml && statusUserHtml.textContent)
    statusUser = statusUserHtml.textContent;

  // Write messages in store, if reciving messages not empty
  if (msgs.length) {
    otherUser = [msgs[0].from, msgs[0].to].find((user) => user !== currentUser);
  }
  if (otherUser) {
    UsersMsgsStore.setUserMsgs(otherUser, msgs);
    const unReadMsgsNumber = msgs.reduce((a: number, msg: IMessage) => {
      if (msg.from === otherUser && !msg.status.isReaded) return a + 1;
      return a;
    }, 0);
    if (otherUser && unReadMsgsNumber)
      UsersStore.setUnReadMsgs(otherUser, unReadMsgsNumber);
  }

  // If empty status field (there isn't choosing user)
  if (!statusUser && field) {
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

  // If user is choosing and recivng array is empty
  if (!messages.length && statusUser) {
    messages = (UsersMsgsStore.getUserMsgs(statusUser) as IMessage[]) || [];
    if (!messages.length) {
      field.innerHTML = "";
      field.append(
        createElement(
          "div",
          ["field__message-center"],
          `Start communicate with ${statusUser}`,
        ),
      );
      return;
    }
  }

  if (statusUser) renderMessagesField(statusUser, messages);
}
