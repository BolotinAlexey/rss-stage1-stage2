export default function changeDataPuzzles() {
  const dataPuzzles: NodeList = document.querySelectorAll(".puzzle-data");
  if (!dataPuzzles) throw new Error("Don't find 'puzzle-data'");
  Object.values(dataPuzzles).forEach((el: Node) => {
    if (!(el instanceof HTMLElement))
      throw new Error("puzzle-data isn't HTMLElement");
    el.classList.remove("puzzle-data");
    const fakeEl = el;
    fakeEl.style.flexGrow = "1";
  });
}
