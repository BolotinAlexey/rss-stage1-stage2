import chatPage from "../pages/chat/index";
import UsersStore from "../store/usersStore/index";
import logout from "./logout";

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
      if (data.isLogined) chatPage();
      break;

    case "USER_LOGOUT":
      if (!data.isLogined) logout();
      break;

    default:
      break;
  }
}
