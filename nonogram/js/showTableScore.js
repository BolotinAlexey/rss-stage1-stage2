import createElandClass from "./createElandClass.js";
import generateModal from "./generateModal.js";

export default function showTableScore() {
  const score = localStorage.getItem("tableBolotin")
    ? JSON.parse(localStorage.getItem("tableBolotin"))
    : [];

  if (!score.length) {
    generateModal(
      "Score Table",
      createElandClass(
        "p",
        ["modal__score"],
        "Unfortunately, there are no players yet in the table."
      )
    );
    return;
  }

  const table = createElandClass("table", ["table"]);

  // Table is sorted by time of the game using XX:XX format (for example, using LocalStorage). Every line should include: solved puzzle (either naming, or picture, or both); difficulty; stop-watch result.

  const insertStringThead =
    "<tr>" +
    Object.keys(score[0]).reduce(
      (a, b) => a + `<th data-th='${b}'>${b}</th>`,
      ""
    ) +
    "</tr>";
  table.insertAdjacentHTML("beforeend", insertStringThead);
  createBody([...score].sort(), table);

  generateModal("Score Table", table);
  // add btns
  // addBtn("score", scoreNames, k);
  // addBtn("max_tile", scoreNames, k);
  // addBtn("dimension", scoreNames, k);
  // addBtn("name", scoreNames, k);
}

function createBody(arr, table) {
  const insertString = arr.reduce((a, b) => a + tableRow(b), "");
  table.insertAdjacentHTML("beforeend", insertString);
}

function tableRow({ time, level, name }) {
  return `
  <tr>
  <td>${name}</td>
  <td>${level}x${level}</td>
   <td>${time}</td>
</tr>
    `;
}

function changeOrderTable(scoreNames, key, k) {
  const trs = Object.values(refs.table.querySelectorAll("tr"));

  // delete all tr, exactly 0th(contains th)
  trs.forEach((tr, i) => i && tr.remove());

  const sortFn =
    key === "name"
      ? (a, b) =>
          k > 0 ? b[key].localeCompare(a[key]) : a[key].localeCompare(b[key])
      : (a, b) => k * b[key] - k * a[key];
  const tempArr = [...scoreNames].sort(sortFn);
  renderTable(tempArr);
}

function addBtn(key, scoreNames, k) {
  const th = refs.table.querySelector(`[data-th=${key}]`);
  const btnTh = document.createElement("button");
  btnTh.classList.add("btn-th");
  th.appendChild(btnTh);

  const svgString = `<span>
                  <svg class="contacts__icon-invert" width="16" height="15">
                    <use href="./assets/sprite.svg#arrow"></use>
                  </svg>
                </span>`;
  btnTh.insertAdjacentHTML("beforeend", svgString);

  btnTh.addEventListener("click", () => {
    changeOrderTable(scoreNames, key, k);
    k *= -1;
  });
}
