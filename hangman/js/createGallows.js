import createElandClass from "./createElandClass.js";
const parts = [
  "head",
  "trunk",
  "left-hand",
  "right-hand",
  "left-leg",
  "right-leg",
];
export default function createGallows(isRepeat, parts) {
  if (isRepeat) {
    const parts = document.querySelectorAll(".body__part");
    parts.forEach((part) => {
      if (part.classList.contains("visible")) part.classList.remove("visible");
    });
    return;
  }
  const gallows = createElandClass("section", ["section", "gallows"]);
  const title = createElandClass("h1", ["page__title"], "Hangman game");
  const gallowsImg = createElandClass("div", ["gallows__img"]);
  const body = createElandClass("ul", ["gallows__body", "body"]);
  parts.forEach((part) =>
    body.append(createElandClass("li", ["body__part", `body__part_${part}`]))
  );
  gallowsImg.append(body);
  gallows.append(gallowsImg, title);

  document.querySelector(".page").append(gallows);
}
