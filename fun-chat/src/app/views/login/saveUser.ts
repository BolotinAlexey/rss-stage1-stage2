import { User } from "../../interfaces/user";
import SessionStorageAPI from "../../services/sessionStorageApi";
import UserStore from "../../store/userStore/index";

export default function saveUser(user: User) {
  SessionStorageAPI.setUser = user;
  UserStore.setUser = user;
}
