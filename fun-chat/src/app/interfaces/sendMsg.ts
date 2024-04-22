export interface SendMsgUser {
  id: string;
  type: "MSG_SEND";
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}
export interface SendMsgUserRequest {
  id: string | null;
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
