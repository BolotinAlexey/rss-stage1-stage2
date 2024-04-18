export interface MsgDeletionResError {
  id: string;
  type: "ERROR";
  payload: {
    error: string;
  };
}
