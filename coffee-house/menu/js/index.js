import showCardList from "./showCardList.js";
import getRefs from "./getRefs.js";
import items from "../../assets/items.js";
import onCard from "./onCard.js";

let isMore = false;
let currentCategory = "coffee";
let currentItemsArray = items.filter((el) => el.category === currentCategory);

let itemsNumber;
const { tab, cards, more } = getRefs();

window.addEventListener("resize", onResize);
tab.addEventListener("click", onTab);
more.addEventListener("click", onMore);

cards.addEventListener("click", (e) => onCard(e, currentItemsArray));
onResize(null);

function onTab(e) {
  if (e?.target?.tagName !== "INPUT" && e) return;
  currentCategory = e ? e.target.dataset.name : currentCategory;
  currentItemsArray = items.filter((el) => el.category === currentCategory);

  if (e) onResize();
  cards.innerHTML = showCardList(currentItemsArray, itemsNumber);
}

function onResize(e) {
  isMore = window.innerWidth > 768 ? false : true;
  itemsNumber = isMore ? 4 : 8;
  if (isMore && itemsNumber < currentItemsArray.length)
    more.classList.add("visible");
  else if (more.classList.contains("visible")) more.classList.remove("visible");
  onTab(null);
}

function onMore() {
  isMore = false;
  itemsNumber = currentItemsArray.length;
  onTab();
  if (more.classList.contains("visible")) more.classList.remove("visible");
}