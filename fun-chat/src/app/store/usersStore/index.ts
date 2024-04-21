import { UserResponse } from "../../interfaces/userResponse";
import SessionStorageAPI from "../../services/sessionStorageApi";
import renderUsers from "../../utils/renderUsers";

export default class UsersStore {
  private static usersActive: UserResponse[] = [];

  private static usersPassive: UserResponse[] = [];

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
    this.usersActive = users;
    renderUsers(this.getActiveUsers, "active");
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
    renderUsers(this.getPassiveUsers, "passive");
  }

  public static set setWord(word: string) {
    this.word = word;
  }
}
