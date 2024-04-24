import UsersMsgsStore from "../store/usersMsgsStore.ts/index";
import UsersStore from "../store/usersStore/index";

export default function searchUserById(id: string): string | undefined {
  const users: string[] = [
    ...UsersStore.usersActive,
    ...UsersStore.usersPassive,
  ].map((user) => user.login);

  const user = users.find((usr) =>
    UsersMsgsStore.getUserMsgs(usr)?.find((msg) => msg.id === id),
  );
  return user;
}
