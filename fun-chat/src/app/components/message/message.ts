import { IMessage } from "../../interfaces/message";
import { SendMsgUserRequest } from "../../interfaces/sendMsg";
import { createElement } from "../../utils/supFunctions";
import View from "../../views/views";
import "./style.scss";

export default class Message extends View {
  id: string | null;

  message: IMessage;

  constructor(data: SendMsgUserRequest) {
    super({ tag: "div", class: ["message"], text: "" });
    this.id = data.id;
    this.message = data.payload.message;
  }

  createMessage() {
    if (this.id === null) this.message.to = "you";
    else this.message.from = "you";
    const { id, from, to, text, datetime } = this.message;
    const fromHtml: HTMLElement = createElement(
      "span",
      [`message__from`],
      from,
    );
    const toHtml: HTMLElement = createElement("span", [`message__to`], to);
    const textHtml: HTMLElement = createElement(
      "span",
      [`message__text`],
      text,
    );
    const dateHtml: HTMLElement = createElement(
      "span",
      [`message__date`],
      datetime.toString(),
    );
  }
}

// {
//   id: string,
//   type: "MSG_SEND",
//   payload: {
//     message: {
//       id: string,
//       from: string,
//       to: string,
//       text: string,
//       datetime: number,
//       status: {
//         isDelivered: boolean,
//         isReaded: boolean,
//         isEdited: boolean,
//       }
//     }
//   }
// }
