import WSApi from "../services/wsApi";
import { getElementDocument } from "./supFunctions";

export default function editMessage(id: string) {
  const userHtml: HTMLElement = getElementDocument(".message__status-user");
  const user: string | null = userHtml.textContent;
  if (!user) return;
  WSApi.sendRequestMessages(user);
  console.log(id);
}
