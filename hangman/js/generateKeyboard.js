import alphaArr from "../assets/alpha.js";
import createElandClass from "./createElandClass.js";
import generateKey from "./generateKey.js";
import onKey from "./index.js";
// import onKey from "./onKey.js";

export default function generateKeyboard(isRepeat) {
  const list = isRepeat
    ? document.querySelector(".keyboard__list")
    : document.createElement("ul");
  if (!isRepeat) {
    const section = createElandClass("section", ["section", "keyboard"]);
    list.classList.add("section__list", "keyboard__list");
    section.append(list);
    document.querySelector(".page").append(section);

    list.addEventListener("click", onKey);
  } else {
    list.innerHTML = "";
  }
  const keyboardStr = alphaArr.reduce(generateKey, "");
  list.insertAdjacentHTML("afterbegin", keyboardStr);
}
