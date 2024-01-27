export default function showAnswer() {
  const bools = document.querySelectorAll("[data-bool]");
  bools.forEach((el) => {
    if (el.dataset.bool === "1") {
      if (!el.classList.contains("fill")) el.classList.add("fill");
    } else {
      if (el.classList.contains("cross")) el.classList.remove("cross");
    }
  });
}
