// eslint-disable-next-line import/no-cycle
import Page from "../components/page/page";

export default async function refreshTitles(page: Page) {
  const pageHtml: HTMLElement = page.getHTMLElement();
  const title = pageHtml.querySelector(".title");
  if (title?.textContent)
    title.textContent = `${page.namePage} (${page.count})`;
  const num = pageHtml.querySelector(".page-num");
  if (num?.textContent) num.textContent = `Page: #${page.num}`;
}
