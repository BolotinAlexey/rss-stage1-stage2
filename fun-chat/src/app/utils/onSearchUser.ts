import UsersStore from "../store/usersStore/index";
import renderUsers from "./renderUsers";
import { getElementDocument } from "./supFunctions";

export default function onSearchUser() {
  const inputSearch = getElementDocument<HTMLInputElement>(".users__search");
  const { value } = inputSearch;
  // if (!target || !("value" in target) || typeof target.value !== "string")
  //   target.value = "";
  UsersStore.setWord = value;
  renderUsers(UsersStore.getActiveUsers, "active");
  renderUsers(UsersStore.getPassiveUsers, "passive");
}
