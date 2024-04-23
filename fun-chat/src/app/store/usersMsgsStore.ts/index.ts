import { IMessage } from "../../interfaces/message";

export default class UsersMsgsStore {
  private static users = new Map<string, IMessage[]>();

  private static activeUser: string = "";

  public static getUserMsgs(user: string) {
    return this.users.get(user);
  }

  public static setUserMsgs(user: string, messages: IMessage[]) {
    this.users.set(user, messages);
  }

  public static get getActiveUser() {
    return this.activeUser;
  }

  public static set setActiveUser(user: string) {
    this.activeUser = user;
  }
}
