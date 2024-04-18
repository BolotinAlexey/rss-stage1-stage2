export interface NotifMsgDeliveryStatus {
  id: null;
  type: "MSG_DELIVER";
  payload: {
    message: {
      id: string;
      status: {
        isDelivered: boolean;
      };
    };
  };
}
