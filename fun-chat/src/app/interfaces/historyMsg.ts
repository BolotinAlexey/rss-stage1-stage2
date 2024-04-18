export interface HistoryMsgReq {
  id: string;
  type: "MSG_FROM_USER";
  payload: {
    user: {
      login: string;
    };
  };
}
export interface HistoryMsgRes {
  id: string;
  type: "MSG_FROM_USER";
  payload: {
    messages: [];
  };
}
