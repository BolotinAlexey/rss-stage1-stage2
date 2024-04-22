import Message from "../components/message/message";
import { IMessage } from "../interfaces/message";
import { getElementDocument } from "./supFunctions";

export default function renderMessagesField(messages: IMessage[]) {
  const field = getElementDocument(".messages__field");
  field.innerHTML = "";
  if (!messages.length) return;
  const msgArr: HTMLElement[] = messages.map((message: IMessage) => {
    const msg = new Message(message);
    return msg.getHTMLElement();
  });
  field.append(...msgArr);
}
