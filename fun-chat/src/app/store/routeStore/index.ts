export default class RouteStore {
  private static page: string = window.location.pathname;

  public static get getPage(): string {
    return this.page;
  }

  public static set setPage(page: string) {
    this.page = page;
  }
}
