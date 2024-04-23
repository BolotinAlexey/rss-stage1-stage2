import UsersMsgsStore from "../store/usersMsgsStore.ts/index";
import { getElementDocument } from "./supFunctions";

export default function onEditMessage(id: string, text: string) {
  const input = <HTMLFormElement>getElementDocument(".messages__input");
  input.value = text;
  UsersMsgsStore.editedId = id;
}
