import Track from "../components/track/track";

export default class StoreTrack {
  static track: Track | null = null;

  static set setTrack(track: Track) {
    this.track = track;
  }

  public static get getTrack(): Track | null {
    return this.track;
  }
}
