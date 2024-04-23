import Message from "../components/message/message";
import { SCROLL_DELAY } from "../constants/index";
import { IMessage } from "../interfaces/message";
import UsersMsgsStore from "../store/usersMsgsStore.ts/index";
import { createElement, getElementDocument } from "./supFunctions";

export default function renderMessagesField(
  statusUser: string,
  msgs: IMessage[],
) {
  const field = getElementDocument(".messages__field");
  const messages = structuredClone(msgs);
  field.innerHTML = "";
  if (!messages.length) return;
  messages.forEach((message: IMessage) => {
    const msg = new Message(message);
    if (
      !document.querySelector(".not-read") &&
      message.from === statusUser &&
      !message.status.isReaded
    ) {
      console.log("append unread");

      field.append(
        createElement("div", ["not-read"], "----- Not read messages -----"),
      );
    }
    field.append(msg.getHTMLElement());
  });
  UsersMsgsStore.isScroll = true;
  const notReadMsg = document.querySelector(".not-read");
  if (notReadMsg) {
    notReadMsg.scrollIntoView(true);
  } else {
    const htmlMessages = document.querySelectorAll(".message");
    if (htmlMessages.length) {
      htmlMessages[htmlMessages.length - 1].scrollIntoView(true);
    }
  }
  UsersMsgsStore.isScroll = false;
}
