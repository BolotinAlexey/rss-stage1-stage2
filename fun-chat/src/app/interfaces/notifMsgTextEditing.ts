export interface NotifMsgTextEditing {
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