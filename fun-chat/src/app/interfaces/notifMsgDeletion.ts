export interface NotifMsgDeletion {
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
