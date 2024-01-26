import createElandClass from "./createElandClass.js";

export default function showModal(name, time) {
  console.log(name, time);
  const backDrop = createElandClass("div", ["backdrop-modal"]);

  // const bgColorClass = isWin ? "success" : "unsuccess";
  const modal = createElandClass("div", ["modal"]);
  backDrop.append(modal);
  document.querySelector("body").append(backDrop);

  const modalTitle = createElandClass("h2", ["modal__title"], "You win!");
  const score = createElandClass(
    "p",
    ["modal__score"],
    `You solved the picture ${name} in ${time} minutes.`
  );

  const crossBtn = createElandClass(
    "button",
    ["modal__btn", "modal__btn_no"],
    "❌"
  );

  // crossBtn.addEventListener("click", );

  modal.append(modalTitle, score, crossBtn);
}
