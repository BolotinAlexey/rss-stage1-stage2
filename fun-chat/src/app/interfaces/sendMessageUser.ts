export interface SendMessageUser {
  id: string;
  type: "MSG_SEND";
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}
export interface SendMessageUserRequest {
  id: string;
  type: "MSG_SEND";
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
}
export interface SendMessageUserRequestError {
  id: string;
  type: "ERROR";
  payload: {
    error:
      | "sender and recipient logins are the same"
      | "the user with the specified login does not exist"
      | "user not registered or not logged";
  };
}
