export default function setSizeCell(folder) {
  let complexity =
    folder.length === 3 ? +folder.slice(0, 1) : +folder.slice(0, 2);
  const th = document.querySelectorAll(".table__th");
  const td = document.querySelectorAll(".table__td");
  [...td, ...th].forEach(
    (el) =>
      (el.style.width = el.style.height = `${100 / Math.sqrt(complexity)}px`)
  );
}
