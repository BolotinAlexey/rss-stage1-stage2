import { IMessage } from "../../interfaces/message";

export default class UsersMsgsStore {
  private static users = new Map<string, IMessage[]>();

  private static usersId = new Map<string, string>();

  private static activeUser: string = "";

  public static editedId: string | null = null;

  public static getUserMsgs(user: string) {
    return this.users.get(user);
  }

  public static setUserMsgs(user: string, messages: IMessage[]) {
    this.users.set(user, messages);
  }

  public static getUserById(id: string) {
    return this.usersId.get(id);
  }

  public static setUserById(id: string, user: string) {
    this.usersId.set(id, user);
  }

  public static get getActiveUser() {
    return this.activeUser;
  }

  public static set setActiveUser(user: string) {
    this.activeUser = user;
  }
}
