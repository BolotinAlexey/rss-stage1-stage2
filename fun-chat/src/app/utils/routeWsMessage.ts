import chatPage from "../pages/chat/index";
import WSApi from "../services/wsApi";
import UsersStore from "../store/usersStore/index";
import changeStatusOtherUser from "./changeStatusOtherUser";
import deleteMessage from "./deleteMessage";
import editMessage from "./editMessage";
import existUser from "./existUser";
import logout from "./logout";
import notify from "./notify";
import reciveMessage from "./reciveMessage";
import reciveMessagesFromUser from "./reciveMessagesFromUser";

export default function routeWsMessage(e: MessageEvent) {
  const data = JSON.parse(e.data);

  switch (data.type) {
    case "USER_ACTIVE":
      UsersStore.setActiveUsers = data.payload.users;
      break;

    case "USER_INACTIVE":
      UsersStore.setPassiveUsers = data.payload.users;
      break;

    case "USER_LOGIN":
      if (data.payload.user.isLogined) chatPage();
      break;

    case "USER_LOGOUT":
      if (!data.isLogined) logout();
      break;

    case "USER_EXTERNAL_LOGIN":
      WSApi.usersActive();
      WSApi.usersPassive();
      changeStatusOtherUser(data.payload.user);
      break;

    case "USER_EXTERNAL_LOGOUT":
      WSApi.usersActive();
      WSApi.usersPassive();
      changeStatusOtherUser(data.payload.user);
      break;

    case "MSG_SEND":
      reciveMessage(data);
      break;

    case "MSG_DELIVER":
      if (data.payload.message.status.isDelivered) {
        editMessage(data.payload.message.id);
      }
      break;

    case "MSG_FROM_USER":
      reciveMessagesFromUser(data.payload.messages);
      break;

    case "MSG_READ":
      WSApi.usersActive();
      WSApi.usersPassive();
      if (existUser()) WSApi.sendRequestMessages(existUser());
      break;

    case "ERROR":
      notify(data.payload.error, true);
      break;

    case "MSG_DELETE":
      if (data.payload.message.status.isDeleted) {
        deleteMessage(data.payload.message.id);
        WSApi.usersActive();
        WSApi.usersPassive();
      }
      break;

    case "MSG_EDIT":
      if (data.payload.message.status.isEdited) {
        editMessage(data.payload.message.id);
      }
      break;

    default:
      break;
  }
}
