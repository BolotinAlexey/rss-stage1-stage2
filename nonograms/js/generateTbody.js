import createElandClass from "./createElandClass.js";
import normalizeArrLeft from "./normalizeArrLeft.js";

export default function generateTbody(nonogram, leftTotal, maxLeft) {
  const leftTotalNormolize = normalizeArrLeft(leftTotal, maxLeft);
  const tbody = createElandClass("tbody", ["tbody"]);
  for (let j = 0; j < nonogram.length; j += 1) {
    const tr = createElandClass("tr", ["table__tr"]);
    tbody.append(tr);
    for (let i = 0; i < maxLeft + nonogram.length; i += 1) {
      const td = createElandClass("td", ["table__td"]);
      tr.append(td);
      if (i < maxLeft) {
        td.classList.add("table__th");

        td.dataset.glue = td.innerText = leftTotalNormolize[j][i];
      } else {
        td.dataset.bool = nonogram[j][i - maxLeft];
        td.dataset.fill = 0;
      }
    }
  }
  return tbody;
}
