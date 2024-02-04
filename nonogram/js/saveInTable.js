export default function saveInTable() {
  const unUsedTr = document.querySelector(".table__unused-tr");
  const level = unUsedTr.querySelectorAll(".table__th").length;
  const name = document.querySelector(".colgroup").dataset.name;
  const time = document.querySelector(".table__unused-th").innerText;
  const newData = {
    name,
    level,
    time,
  };
  const ls = localStorage.getItem("tableBolotin");
  const arr = ls ? JSON.parse(ls) : [];
  arr.push(newData);
  arr.length > 5 && arr.shift();
  localStorage.setItem("tableBolotin", JSON.stringify(arr));
}
