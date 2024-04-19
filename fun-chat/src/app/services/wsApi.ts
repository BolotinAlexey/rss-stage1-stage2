import { User } from "../interfaces/user";
import WSStore from "../store/wsStore/index";

export default class WSApi {
  public static authUser(user: User) {
    if (WSStore.ws) {
      WSStore.ws.send(
        JSON.stringify({ id: "1", type: "USER_LOGIN", payload: { user } }),
      );
    }
  }
}
