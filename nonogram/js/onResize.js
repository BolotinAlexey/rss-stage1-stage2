export default function onResize() {
  const body = document.querySelector("body");
  const table = document.querySelector(".table");
  const infoWrap = document.querySelector(".info-wrap");
  const btns = document.querySelector(".btns");
  const accordion = document.querySelector(".accordion");

  if (
    body.offsetWidth - 50 <
    table.offsetWidth + btns.offsetWidth + accordion.offsetWidth
  ) {
    if (!infoWrap.classList.contains("column"))
      infoWrap.classList.add("column");
  }
  if (
    infoWrap.classList.contains("column") &&
    body.offsetWidth - 50 >
      table.offsetWidth + btns.offsetWidth + accordion.offsetWidth
  )
    infoWrap.classList.remove("column");

  if (
    infoWrap.classList.contains("column") &&
    body.offsetWidth - 50 > btns.offsetWidth + accordion.offsetWidth &&
    body.offsetWidth - 50 < table.offsetWidth + btns.offsetWidth
  )
    infoWrap.classList.remove("column");

  // console.log(
  //   body.offsetWidth - 20 >
  //     table.offsetWidth + btns.offsetWidth + accordion.offsetWidth
  // );
}
// const table = document.querySelector(".table");
