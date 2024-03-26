import IPage from "../interfaces/IPage";
import { createElement } from "../services/supFunctions";

export default function setPageNum(page: IPage) {
  const title: HTMLElement = createElement(
    "h3",
    ["page-num", `${page.namePage}__page-num`],
    `Page: #${page.num}`,
  );
  return title;
}
