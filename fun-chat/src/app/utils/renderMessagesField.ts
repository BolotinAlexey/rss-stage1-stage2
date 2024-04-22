import Message from "../components/message/message";
import { IMessage } from "../interfaces/message";
import { getElementDocument } from "./supFunctions";

export default function renderMessagesField(messages: IMessage[]) {
  if (!messages.length) return;
  const field = getElementDocument(".messages__field");
  const msgArr: HTMLElement[] = messages.map((message: IMessage) => {
    const msg = new Message(message);
    return msg.getHTMLElement();
  });
  field.innerHTML = "";
  field.append(...msgArr);
}
