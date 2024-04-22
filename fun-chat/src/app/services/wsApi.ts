import { User } from "../interfaces/user";
import WSStore from "../store/wsStore/index";
import randomId from "../utils/randomId";

export default class WSApi {
  public static authUser(user: User) {
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: randomId(),
          type: "USER_LOGIN",
          payload: { user },
        }),
      );
    }
  }

  public static logoutUser(user: User) {
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: randomId(),
          type: "USER_LOGOUT",
          payload: {
            user,
          },
        }),
      );
    }
  }

  public static usersActive() {
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: randomId(),
          type: "USER_ACTIVE",
          payload: null,
        }),
      );
    }
  }

  public static usersPassive() {
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: randomId(),
          type: "USER_INACTIVE",
          payload: null,
        }),
      );
    }
  }

  public static sendMessage(user: string, text: string) {
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: randomId(),
          type: "MSG_SEND",
          payload: {
            message: {
              to: user,
              text,
            },
          },
        }),
      );
    }
  }

  public static sendRequestMessages(login: string) {
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: randomId(),
          type: "MSG_FROM_USER",
          payload: {
            user: {
              login,
            },
          },
        }),
      );
    }
  }

  public static changeIsReadingStatus(idMessage: string) {
    if (WSStore.getWS) {
      WSStore.getWS.send(
        JSON.stringify({
          id: randomId(),
          type: "MSG_READ",
          payload: {
            message: {
              id: idMessage,
            },
          },
        }),
      );
    }
  }
}
