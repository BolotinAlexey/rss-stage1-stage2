import ITrack from "../interfaces/track";
import disabledOrEnabledRemoveAndSelectBtns from "../utils/disabledOrEnabledRemoveAndSelectBtns";

export default class StoreTrack {
  static track: ITrack | null = null;

  static isRace: boolean = false;

  public static set setTrack(track: ITrack) {
    this.track = track;
  }

  public static get getTrack(): ITrack | null {
    return this.track;
  }

  public static get getIsRace(): boolean {
    return this.isRace;
  }

  public static set setIsRace(isRace: boolean) {
    this.isRace = isRace;
    const reset = <HTMLButtonElement>(
      this.track?.page.getHTMLElement().querySelector(".button-reset")
    );

    const race = <HTMLButtonElement>(
      this.track?.page.getHTMLElement().querySelector(".button-race")
    );
    reset.disabled = !isRace;
    race.disabled = isRace;
    disabledOrEnabledRemoveAndSelectBtns(this.track, isRace);
  }
}
