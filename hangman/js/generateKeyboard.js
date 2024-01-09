import alphaArr from "../assets/alpha.js";
import createElandClass from "./createElandClass.js";
import generateKey from "./generateKey.js";
import onKey from "./index.js";
// import onKey from "./onKey.js";

export default function generateKeyboard(body, isRepeat) {
  const list = isRepeat
    ? document.querySelector(".keyboard__list")
    : document.createElement("ul");
  if (!isRepeat) {
    const section = createElandClass("section", ["section", "keyboard"]);
    // const section = document.createElement("section");
    // section.classList.add("section", "keyboard");
    body.append(section);
    list.classList.add("section__list", "keyboard__list");
    section.append(list);
    list.addEventListener("click", onKey);
  } else {
    list.innerHTML = "";
  }
  const keyboardStr = alphaArr.reduce(generateKey, "");
  list.insertAdjacentHTML("afterbegin", keyboardStr);
}
