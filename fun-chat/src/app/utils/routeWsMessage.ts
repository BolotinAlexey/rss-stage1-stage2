import UsersStore from "../store/usersStore/index";
import renderUsers from "./renderUsers";

export default function routeWsMessage(e: MessageEvent) {
  const data = JSON.parse(e.data);
  console.log(data);

  switch (data.type) {
    case "USER_ACTIVE":
      UsersStore.setActiveUsers = data.payload.users;
      break;

    case "USER_INACTIVE":
      UsersStore.setPassiveUsers = data.payload.users;
      renderUsers(e.data.payload.users, "passive");
      break;

    default:
      break;
  }
}
