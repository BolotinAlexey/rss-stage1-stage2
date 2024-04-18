export interface MsgTextEditingReq {
  id: string;
  type: "MSG_EDIT";
  payload: {
    message: {
      id: string;
      text: string;
    };
  };
}
export interface MsgTextEditingRes {
  id: string;
  type: "MSG_EDIT";
  payload: {
    message: {
      id: string;
      text: string;
      status: {
        isEdited: boolean;
      };
    };
  };
}
