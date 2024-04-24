import WSApi from "../services/wsApi";
import searchUserById from "./searchUserById";

export default function editMessage(id: string) {
  const user = searchUserById(id);
  if (!user) return;
  WSApi.sendRequestMessages(user);
}
