import { COUNT_LINES_PER_RESULT_BLOCK } from "../constants/index";
import { createElement } from "./supFunctions";

export default function createLines(resultBlock: HTMLElement): HTMLElement[] {
  const height: number = resultBlock.clientHeight / 10;
  const lines: HTMLElement[] = new Array(COUNT_LINES_PER_RESULT_BLOCK)
    .fill(null)
    .reduce((a: HTMLElement[], _: null, i: number) => {
      const el: HTMLElement = createElement("div", [
        "line",
        "result-block__line",
      ]);
      el.dataset.id = i.toString();
      el.style.height = height.toString();
      return [...a, el];
    }, []);
  resultBlock.append(...lines);
  return lines;
}
