export default class UsersStore {
  private static usersActive: string[] = [];

  private static usersPassive: string[] = [];

  private static word: string = "";

  public static get getActiveUsers() {
    return this.word
      ? this.usersActive.filter((user: string) => user.includes(this.word))
      : this.usersActive;
  }

  public static set setActiveUsers(users: string[]) {
    this.usersActive = users;
  }

  public static get getPassiveUsers() {
    return this.word
      ? this.usersPassive.filter((user: string) => user.includes(this.word))
      : this.usersPassive;
  }

  public static set setPassiveUsers(users: string[]) {
    this.usersPassive = users;
  }

  public static set setWord(word: string) {
    this.word = word;
  }
}
