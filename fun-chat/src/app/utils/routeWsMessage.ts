import UsersStore from "../store/usersStore/index";

export default function routeWsMessage(e: MessageEvent) {
  const data = JSON.parse(e.data);
  console.log(data);

  switch (data.type) {
    case "USER_ACTIVE":
      UsersStore.setActiveUsers = data.payload.users;
      break;

    case "USER_INACTIVE":
      UsersStore.setPassiveUsers = data.payload.users;
      break;

    default:
      break;
  }
}
