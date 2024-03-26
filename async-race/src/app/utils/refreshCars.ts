// eslint-disable-next-line import/no-cycle
import Page from "../components/page/page";

export default async function refreshCarsTitles(garage: Page) {
  const page: HTMLElement = garage.getHTMLElement();
  const title = page.querySelector(".title");
  if (title?.textContent)
    title.textContent = `${garage.namePage} (${garage.count})`;
  const num = page.querySelector(".page-num");
  if (num?.textContent) num.textContent = `Page: #${garage.num}`;
}
