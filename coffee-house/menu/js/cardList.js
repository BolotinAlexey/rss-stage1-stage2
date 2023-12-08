import items from "../../assets/items";
import getCard from "./getCard";

export default function showCardList(category, maxIndex) {
  return items.reduce(
    (a, el, i) =>
      a + (el.category === category && i <= maxIndex) ? getCard(el) : "",
    ""
  );
}
