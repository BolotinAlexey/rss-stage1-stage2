import { IMessage } from "../interfaces/message";
import WSApi from "../services/wsApi";
import UsersMsgsStore from "../store/usersMsgsStore.ts/index";

export default function resetUnreadingStatus() {
  const user = document.querySelector(".message__status-user");
  if (
    !user ||
    !user.textContent ||
    !document.querySelector(".not-read") ||
    UsersMsgsStore.isScroll
  ) {
    console.log(
      !user,
      document.querySelector(".not-read"),
      UsersMsgsStore.isScroll,
    );

    return;
  }
  const messages: IMessage[] | undefined = UsersMsgsStore.getUserMsgs(
    user.textContent,
  );
  if (!messages || !messages.length) return;
  messages.forEach((msg: IMessage) => {
    if (!msg.status.isReaded) WSApi.changeIsReadingStatus(msg.id);
  });
}
