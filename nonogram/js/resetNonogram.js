export default function resetNonogram() {
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
