import { User } from "../interfaces/user";
import WSStore from "../store/wsStore/index";

export default class WSApi {
  static ws = WSStore.getWS;

  public static authUser(user: User) {
    if (this.ws) {
      this.ws.send(
        JSON.stringify({ id: "1", type: "USER_LOGIN", payload: { user } }),
      );
    }
  }
}
