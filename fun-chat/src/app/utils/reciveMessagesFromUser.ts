import { IMessage } from "../interfaces/message";
import SessionStorageAPI from "../services/sessionStorageApi";
import UsersStore from "../store/usersStore/index";
import renderMessagesField from "./renderMessagesField";
import { getElementDocument } from "./supFunctions";

export default function reciveMessagesFromUser(messages: IMessage[]) {
  const currentUser = SessionStorageAPI.getUser?.login;
  const field = getElementDocument(".messages__field");
  if (!messages[0]) {
    field.innerHTML = "";
    return;
  }
  const otherUser = [messages[0].from, messages[0].to].find(
    (user) => user !== currentUser,
  );
  const unReadMsgsNumber = messages.reduce((a: number, msg: IMessage) => {
    if (msg.from === otherUser && !msg.status.isReaded) return a + 1;
    return a;
  }, 0);
  if (otherUser && unReadMsgsNumber)
    UsersStore.setUnReadMsgs(otherUser, unReadMsgsNumber);
  if (document.querySelector(".message__status-user"))
    renderMessagesField(messages);
}
