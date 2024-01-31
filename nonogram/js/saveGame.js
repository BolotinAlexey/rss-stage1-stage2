export default function saveGame({ table, numberFill, currentFill }) {
  localStorage.setItem("nonograme", table.innerHTML);
  localStorage.setItem("numberFill", numberFill);
  localStorage.setItem("currentFill", currentFill);
}
