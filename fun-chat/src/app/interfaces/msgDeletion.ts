export interface MsgDeletionReq {
  id: string;
  type: "MSG_DELETE";
  payload: {
    message: {
      id: string;
    };
  };
}
export interface MsgDeletionRes {
  id: string;
  type: "MSG_DELETE";
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
}
