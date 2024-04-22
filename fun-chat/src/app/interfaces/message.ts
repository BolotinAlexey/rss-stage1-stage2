export type StatusMessage = Required<
  Record<"isDelivered" | "isReaded" | "isEdited", boolean>
>;

export interface IMessage {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: number;
  status: StatusMessage;
}
