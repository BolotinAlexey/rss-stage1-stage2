export default function resetNonogram() {
  document.querySelector(".table__unused-th").innerText = "0:00";
  const bools = document.querySelectorAll("[data-bool]");
  bools.forEach((el) => {
    if (el.classList.contains("fill")) {
      el.classList.remove("fill");
      el.dataset.fill = "0";
    }
    if (el.classList.contains("cross")) {
      el.classList.remove("cross");
    }
  });
}
