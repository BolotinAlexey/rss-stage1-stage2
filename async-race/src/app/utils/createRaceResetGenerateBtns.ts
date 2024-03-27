import Button from "../components/button/button";
import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
import { createElement } from "../services/supFunctions";
import onRaceResetGenerate from "./onRaceResetGenerate";

export default function createRaceResetGenerateBtns(page: IPage) {
  const arr: RaceResetGenerate[] = ["race", "reset", "generate"];
  const arrBtn: HTMLButtonElement[] = arr.map((name: RaceResetGenerate) => {
    const btn = new Button(`button-${name}`, name, (e: Event) =>
      onRaceResetGenerate(e, name, page),
    );
    return btn.getHTMLElement();
  });
  const wrapRaceResetGenerateBtns = createElement("div", ["race-reset-wrap"]);
  wrapRaceResetGenerateBtns.append(...arrBtn);
  page.getHTMLElement().append(wrapRaceResetGenerateBtns);
}
