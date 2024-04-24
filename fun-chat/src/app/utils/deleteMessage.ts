import WSApi from "../services/wsApi";
import UsersMsgsStore from "../store/usersMsgsStore.ts/index";
import searchUserById from "./searchUserById";

export default function deleteMessage(id: string) {
  const user = searchUserById(id);
  if (!user) return;
  WSApi.sendRequestMessages(user);
  const userArr = UsersMsgsStore.getUserMsgs(user);
  if (!userArr?.length) return;
  UsersMsgsStore.setUserMsgs(
    user,
    userArr?.filter((msg) => msg.id !== id),
  );
  const msg = document.querySelector(`[data-id="${id}]"`);
  msg?.remove();
}
