import { User } from "../../interfaces/user";
import SessionStorageAPI from "../../services/sessionStorageApi";

export default function saveUser(user: User) {
  SessionStorageAPI.setUser = user;
}
