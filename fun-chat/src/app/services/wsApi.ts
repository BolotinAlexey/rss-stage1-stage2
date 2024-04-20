import { User } from "../interfaces/user";
import WSStore from "../store/wsStore/index";

export default class WSApi {
  public static authUser(user: User) {
    if (WSStore.getWS) {
      console.log({ id: "1", type: "USER_LOGIN", payload: { user } });
      WSStore.getWS.send(
        JSON.stringify({ id: "1", type: "USER_LOGIN", payload: { user } }),
      );
    }
  }

  public static usersActive() {
    const usersActiveId: number = Math.floor(
      Math.random() * Number.MAX_SAFE_INTEGER,
    );
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: usersActiveId.toString(),
          type: "USER_ACTIVE",
          payload: null,
        }),
      );
    }
  }
}
