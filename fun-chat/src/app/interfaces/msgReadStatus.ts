export interface MsgReadStatusReq {
  id: string;
  type: "MSG_READ";
  payload: {
    message: {
      id: string;
    };
  };
}
export interface MsgReadStatusRes {
  id: string;
  type: "MSG_READ";
  payload: {
    message: {
      id: string;
      status: {
        isReaded: boolean;
      };
    };
  };
}
