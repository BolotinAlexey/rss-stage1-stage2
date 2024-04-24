import { UserResponse } from "../../interfaces/userResponse";
import SessionStorageAPI from "../../services/sessionStorageApi";
import WSApi from "../../services/wsApi";
import renderUsers from "../../utils/renderUsers";

export default class UsersStore {
  public static usersActive: UserResponse[] = [];

  public static usersPassive: UserResponse[] = [];

  private static word: string = "";

  public static get getActiveUsers() {
    const currentUser = SessionStorageAPI.getUser?.login;
    const users = this.word
      ? this.usersActive.filter((user: UserResponse) =>
          user.login.includes(this.word),
        )
      : this.usersActive;

    return users.filter((user) => {
      return user.login !== currentUser;
    });
  }

  public static set setActiveUsers(users: UserResponse[]) {
    const currentUser: string | undefined = SessionStorageAPI.getUser?.login;
    if (currentUser) {
      this.usersActive = users;
      users
        .filter((usr) => usr.login !== currentUser)
        .forEach(({ login }) => WSApi.sendRequestMessages(login));
      renderUsers(this.getActiveUsers, "active");
    }
  }

  public static get getPassiveUsers() {
    return this.word
      ? this.usersPassive.filter((user: UserResponse) =>
          user.login.includes(this.word),
        )
      : this.usersPassive;
  }

  public static set setPassiveUsers(users: UserResponse[]) {
    this.usersPassive = users;
    users.forEach(({ login }) => WSApi.sendRequestMessages(login));
    renderUsers(this.getPassiveUsers, "passive");
  }

  public static set setWord(word: string) {
    this.word = word;
  }

  public static setUnReadMsgs(login: string, unReadMsgsNumber: number) {
    let user: UserResponse | undefined = this.getActiveUsers.find(
      (el: UserResponse) => el.login === login,
    );
    if (user) {
      user.unReadMsgs = unReadMsgsNumber;
      renderUsers(this.getActiveUsers, "active");
      return;
    }

    user = this.getPassiveUsers.find((el: UserResponse) => el.login === login);
    if (user) user.unReadMsgs = unReadMsgsNumber;
    renderUsers(this.getPassiveUsers, "passive");
  }
}
