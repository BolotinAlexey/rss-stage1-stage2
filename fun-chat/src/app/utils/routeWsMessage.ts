import chatPage from "../pages/chat/index";
import WSApi from "../services/wsApi";
import UsersStore from "../store/usersStore/index";
import logout from "./logout";
import reciveMessage from "./reciveMessage";

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

    default:
      break;
  }
}
