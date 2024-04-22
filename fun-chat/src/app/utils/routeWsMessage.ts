import chatPage from "../pages/chat/index";
import WSApi from "../services/wsApi";
import UsersStore from "../store/usersStore/index";
import existUser from "./existUser";
import logout from "./logout";
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
      break;

    case "USER_EXTERNAL_LOGOUT":
      WSApi.usersActive();
      WSApi.usersPassive();
      break;

    case "MSG_SEND":
      reciveMessage(data);
      break;

    case "MSG_FROM_USER":
      reciveMessagesFromUser(data.payload.messages);
      break;

    case "MSG_READ":
      WSApi.usersActive();
      WSApi.usersPassive();
      if (existUser()) WSApi.sendRequestMessages(existUser());
      break;

    default:
      break;
  }
}
