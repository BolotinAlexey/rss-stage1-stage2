export default function resetCheckStyles(currentLineEl: HTMLElement) {
  Object.values(currentLineEl.childNodes).forEach((el: Node) => {
    if (!el) throw new Error("checking puzzle is null");
    if (!(el instanceof HTMLElement))
      throw new Error("checking puzzle isn't HTMLElement");
    if (el.classList.contains("wrong-puzzle"))
      el.classList.remove("wrong-puzzle");
    if (el.classList.contains("correct-puzzle"))
      el.classList.remove("correct-puzzle");
  });
}
