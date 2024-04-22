import Message from "../components/message/message";
import { IMessage } from "../interfaces/message";
import { createElement, getElementDocument } from "./supFunctions";

export default function renderMessagesField(messages: IMessage[]) {
  const field = getElementDocument(".messages__field");
  field.innerHTML = "";
  if (!messages.length) return;
  messages.forEach((message: IMessage) => {
    const msg = new Message(message);
    if (
      !document.querySelector(".not-read") &&
      message.from !== "you" &&
      !message.status.isReaded
    ) {
      const notReadMsg: HTMLElement = createElement(
        "div",
        ["not-read"],
        "----- Not read messages -----",
      );
      notReadMsg.id = "not-read";
      field.append(notReadMsg);
    }
    field.append(msg.getHTMLElement());
  });
}
