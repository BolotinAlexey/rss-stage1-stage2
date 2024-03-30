// eslint-disable-next-line import/no-cycle
import ITrack from "../interfaces/track";

export default class StoreTrack {
  static track: ITrack | null = null;

  static set setTrack(track: ITrack) {
    this.track = track;
  }

  public static get getTrack(): ITrack | null {
    return this.track;
  }
}
