// import { IMessage } from "../../interfaces/message";
// import { createElement } from "../../utils/supFunctions";

// export default function createMessage(message: IMessage) {
//   const fakeMessgage = message;
//   if (fakeMessgage.id === null) fakeMessgage.to = "you";
//   else fakeMessgage.from = "you";
//   const { id, from, to, text, datetime } = fakeMessgage;
//   const wrap: HTMLElement = createElement("div", [`message__wrap`]);
//   const fromHtml: HTMLElement = createElement("span", [`message__from`], from);
//   const toHtml: HTMLElement = createElement("span", [`message__to`], to);
//   const textHtml: HTMLElement = createElement("div", [`message__text`], text);
//   const dateHtml: HTMLElement = createElement(
//     "span",
//     [`message__date`],
//     datetime.toString(),
//   );

//   const { isDelivered, isReaded, isEdited } = message.status;
//   // const deliveredText = isDelivered ?
// }
