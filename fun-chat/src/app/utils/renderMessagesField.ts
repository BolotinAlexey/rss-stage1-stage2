import Message from "../components/message/message";
import { IMessage } from "../interfaces/message";
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
      field.append(
        createElement("div", ["not-read"], "----- Not read messages -----"),
      );
    }
    field.append(msg.getHTMLElement());
  });
  const notReadMsg = document.querySelector(".not-read");
  if (notReadMsg) {
    notReadMsg.scrollIntoView(true);
  } else {
    const htmlMessages = document.querySelectorAll(".message");
    if (htmlMessages.length) {
      htmlMessages[htmlMessages.length - 1].scrollIntoView(true);
    }
  }
}
