import { SendMsgUserRequest } from "../../interfaces/sendMsg";
import View from "../../views/views";
import "./style.scss";

export default class Message extends View {
  id: string;

  constructor(data: SendMsgUserRequest) {
    super({ tag: "div", class: ["message"], text: "" });
    this.id = data.id;
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
