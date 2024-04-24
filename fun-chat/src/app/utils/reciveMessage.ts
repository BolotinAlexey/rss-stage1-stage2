import { SendMsgUserRequest } from "../interfaces/sendMsg";
import WSApi from "../services/wsApi";

export default function reciveMessage(data: SendMsgUserRequest) {
  const {
    id,
    payload: { message },
  } = data;

  if (id) {
    WSApi.sendRequestMessages(message.to);
  } else {
    WSApi.sendRequestMessages(message.from);
  }
}
