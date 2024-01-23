import createElandClass from "./createElandClass.js";
import normaliseArr from "./normalizeArr.js";

export default function (maxTop, maxLeft, arr) {
  const thead = createElandClass("thead", ["thead"]);
  const unusedTr = createElandClass("tr", ["table__unused-tr"]);

  // generate unused area in left-top corner
  const unusedTh = createElandClass("th", ["table__unused-th"]);
  unusedTh.rowSpan = `${maxTop}`;
  unusedTh.colSpan = `${maxLeft}`;
  thead.append(unusedTr);
  unusedTr.append(unusedTh);

  // generate clues rows
  normaliseArr(arr, maxTop).forEach((rowClue, i) => {
    const tr = createElandClass("tr", ["table__tr", "thead__tr"]);
    if (i) thead.append(tr);
    rowClue.forEach((clue) => {
      const th = createElandClass("th", ["table__th"], clue);
      console.log(th);
      if (!i) {
        unusedTr.append(th);
      } else {
        tr.append(th);
      }
    });
  });

  return thead;
}
