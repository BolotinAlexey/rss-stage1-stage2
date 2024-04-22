export default class UsersMsgsStore {
  private static users = new Map<string, IMessage[]>();

  private static activeUser: IMessage | null = null;

  public static getUserMsgs(user: string) {
    return this.users.get(user);
  }

  public static setUserMsgs(user: string, messages: IMessage[]) {
    this.users.set(user, messages);
  }
}
