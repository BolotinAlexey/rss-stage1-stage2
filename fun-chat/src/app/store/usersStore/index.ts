import { UserResponse } from "../../interfaces/userResponse";
import renderUsers from "../../utils/renderUsers";

export default class UsersStore {
  private static usersActive: UserResponse[] = [];

  private static usersPassive: UserResponse[] = [];

  private static word: string = "";

  public static get getActiveUsers() {
    return this.word
      ? this.usersActive.filter((user: UserResponse) =>
          user.login.includes(this.word),
        )
      : this.usersActive;
  }

  public static set setActiveUsers(users: UserResponse[]) {
    this.usersActive = users;
    console.log(users);

    renderUsers(users, "active");
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
    renderUsers(users, "passive");
  }

  public static set setWord(word: string) {
    this.word = word;
  }
}
