import WSApi from "../services/wsApi";
import { getElementDocument } from "./supFunctions";

export default function onMessageUser(e: Event) {
  const { target } = e;
  e.preventDefault();

  if (!(target instanceof HTMLFormElement)) throw new Error("Form isn't form");
  if (!(target.elements[0] instanceof HTMLInputElement))
    throw new Error("Input isn't input");

  const user: string =
    getElementDocument(".message__status-user").textContent || "";

  WSApi.sendMessage(user, target.elements[0].value);
  target.reset();
}
