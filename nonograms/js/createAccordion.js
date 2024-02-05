import { listNonograms } from "../assets/listNonograms.js";
import createElandClass from "./createElandClass.js";

export default function createAccordion(page) {
  const accordion = createElandClass("section", ["section", "accordion"]);
  const title = createElandClass(
    "h2",
    ["section__title", "visually-hidden"],
    "Accordion"
  );
  const list = createElandClass("ul", ["accordion__list"]);
  accordion.append(title, list);
  for (const key in listNonograms) {
    const complexity = createElandClass("li", [
      "accordion__item",
      "complexity",
    ]);
    const p = createElandClass("p", ["complexity__text"], key);
    list.append(complexity);
    complexity.append(p);

    const complexityList = createElandClass("ul", [
      "accordion__list",
      "complexity__list",
    ]);
    complexity.append(complexityList);

    listNonograms[key].forEach((nameNonogram) => {
      const nonogram = createElandClass(
        "li",
        ["accordion__item", "complexity__item"],
        nameNonogram
      );
      nonogram.dataset.folder = key;
      complexityList.append(nonogram);
    });
  }
  page.append(accordion);
  return list;
}
