import { IMessage } from "../../interfaces/message";
import SessionStorageAPI from "../../services/sessionStorageApi";
import onContextMenu from "../../utils/onContextMenu";
import { createElement } from "../../utils/supFunctions";
import View from "../../views/views";

export default class Message extends View {
  message: IMessage;

  constructor(message: IMessage) {
    super({ tag: "div", class: ["message"], text: "" });
    this.message = message;
    this.createMessage();
  }

  createMessage() {
    const currentUser = SessionStorageAPI.getUser?.login;
    if (!currentUser) return;
    if (this.message.from === currentUser) {
      this.message.from = "you";
      this.getHTMLElement().classList.add("right-message");
    } else this.getHTMLElement().classList.add("left-message");
    const {
      id,
      from,
      text,
      datetime,
      status: { isDelivered, isEdited, isReaded },
    } = this.message;

    const fromHtml: HTMLElement = createElement(
      "span",
      ["message__from"],
      from,
    );
    const top: HTMLElement = createElement("div", ["message__top"]);
    const textHtml: HTMLElement = createElement("div", ["message__text"], text);
    const dateHtml: HTMLElement = createElement(
      "span",
      ["message__date"],
      new Date(datetime).toLocaleString(),
    );

    const bottom: HTMLElement = createElement("div", ["message__bottom"]);

    let statusSending = isDelivered ? "delivered" : "sended";
    statusSending = isReaded ? "readed" : statusSending;
    const statusSendingHtml = createElement(
      "span",
      ["message__status-sending"],
      statusSending,
    );
    const statusEditngHtml = createElement(
      "span",
      ["message__status-editing"],
      isEdited ? "edited" : " ",
    );

    if (this.message.from === "you") {
      bottom.append(statusEditngHtml, statusSendingHtml);
    } else {
      bottom.append(statusEditngHtml);
    }

    top.append(fromHtml, dateHtml);
    this.getHTMLElement().append(top, textHtml, bottom);
    this.getHTMLElement().dataset.id = id;
    this.getHTMLElement().addEventListener("contextmenu", (e) =>
      onContextMenu(e, id),
    );
  }
}
