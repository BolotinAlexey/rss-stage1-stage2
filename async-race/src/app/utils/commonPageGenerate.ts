import Page from "../components/page/page";
import createPrevNext from "./createPrevNext";
import formCarGenerate from "./formCarGenerate";
import setPageTitle from "./setPageTitle";

export default function commonPageGenerate(page: Page) {
  if (page.namePage === "garage") {
    formCarGenerate("create", page);
    formCarGenerate("update", page);
  }
  setPageTitle(page);
  createPrevNext(page);
}
