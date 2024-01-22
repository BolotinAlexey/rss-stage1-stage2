import createElandClass from "./createElandClass.js";
import generateColgroup from "./generateColgroup.js";
import generateHead from "./generateHead.js";

export default function generateGrid({ leftTotal, topTotal, nonogram }) {
  console.log(leftTotal, topTotal, nonogram);

  const maxLeft = Math.max(...leftTotal.map((row) => row.length));
  const maxTop = Math.max(...topTotal.map((col) => col.length));
  console.log(maxLeft, maxTop);

  const grid = document.querySelector(".grid");
  const table = createElandClass("table", ["table"]);
  grid.append(table);

  const colgroupStr = generateColgroup(maxLeft, nonogram.length / 5);
  const head = generateHead(maxTop, topTotal);
  table.insertAdjacentHTML("beforeend", colgroupStr);
  table.append(head);
}
