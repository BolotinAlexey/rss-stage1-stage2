import IPage from "../interfaces/IPage";
import ApiCars from "../services/apiCars";
import { createElement } from "../services/supFunctions";
import setPageNum from "./setPageNum";

export default async function setPageTitle(page: IPage) {
  const api = new ApiCars();
  const count: number = await api.getCount(page.namePage);
  const fakePage = page;
  fakePage.count = count;

  const titleWrap: HTMLElement = createElement("div", ["title-wrap"]);
  const title: HTMLElement = createElement(
    "h2",
    ["title", `${page.namePage}__title`],
    `${page.namePage} (${page.count})`,
  );
  titleWrap.append(title, setPageNum(page));
  page.getHTMLElement().append(titleWrap);
}
