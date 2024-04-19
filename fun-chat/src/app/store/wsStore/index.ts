export default class WSStore {
  public static ws: WebSocket | null = null;

  public static get getWS(): WebSocket | null {
    return this.ws;
  }

  public static set setWS(ws: WebSocket | null) {
    this.ws = ws;
  }
}
