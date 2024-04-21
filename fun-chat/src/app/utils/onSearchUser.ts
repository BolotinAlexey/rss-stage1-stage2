import WSApi from "../services/wsApi";
import UsersStore from "../store/usersStore/index";
import { getElementDocument } from "./supFunctions";

export default function onSearchUser() {
  const inputSearch = getElementDocument<HTMLInputElement>(".users__search");
  const { value } = inputSearch;
  UsersStore.setWord = value;
  WSApi.usersActive();
  WSApi.usersPassive();
}
