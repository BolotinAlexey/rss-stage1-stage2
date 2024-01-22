import createElandClass from "./createElandClass.js";
import normaliseArr from "./normalizeArr.js";

export default function (maxTop, arr) {
  const thead = createElandClass("thead", ["thead"]);
  const unusedTr = createElandClass("tr", ["table__unused-tr"]);

  // generate unused area in left-top corner
  const unusedTh = createElandClass("th", ["table__unused-th"]);
  unusedTh.rowSpan = `${maxTop}`;
  thead.append(unusedTr);
  unusedTr.append(unusedTh);

  // generate clues rows
  new Array(maxTop)
    .fill(0)
    .forEach((_) => normaliseArr(arr, maxTop).forEach((th) => {}));

  return thead;
}
