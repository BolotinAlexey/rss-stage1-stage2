import Message from "../components/message/message";
import { SCROLL_DELAY } from "../constants/index";
import { IMessage } from "../interfaces/message";
import UsersMsgsStore from "../store/usersMsgsStore.ts/index";
import { createElement, getElementDocument } from "./supFunctions";

export default function renderMessagesField() {
  const statusUserHtml = document.querySelector(".message__status-user");
  let messages: IMessage[] = [];
  const field = getElementDocument(".messages__field");
  field.innerHTML = "";
  if (
    statusUserHtml &&
    statusUserHtml.textContent &&
    UsersMsgsStore.getUserMsgs(statusUserHtml.textContent)
  ) {
    messages = UsersMsgsStore.getUserMsgs(
      statusUserHtml.textContent,
    ) as IMessage[];
  } else {
    return;
  }

  if (!messages.length) return;
  messages.forEach((message: IMessage) => {
    const msg = new Message(message);
    const notReadMsg: HTMLElement = createElement(
      "div",
      ["not-read"],
      "----- Not read messages -----",
    );
    notReadMsg.id = "not-read";
    if (
      !document.querySelector(".not-read") &&
      message.from !== "you" &&
      !message.status.isReaded
    ) {
      field.append(notReadMsg);
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
  setTimeout(() => {
    UsersMsgsStore.isScroll = false;
  }, SCROLL_DELAY);
}
