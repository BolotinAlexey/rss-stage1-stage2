// import { KOEF_CHANGE_PUZZLE } from "../constants/index";

// export default function increasePuzzles(dataPuzzles: NodeList) {
//   console.log("inc");

//   Object.values(dataPuzzles).forEach((el: Node) => {
//     if (!(el instanceof HTMLElement))
//       throw new Error("puzzle-data isn't HTMLElement");
//     const fakeEl = el;
//     fakeEl.style.fontSize = `${parseInt(el.style.fontSize, 10) * KOEF_CHANGE_PUZZLE}px`;
//     fakeEl.style.paddingLeft = `${parseInt(el.style.paddingLeft, 10) * KOEF_CHANGE_PUZZLE}px`;
//     fakeEl.style.paddingRight = `${parseInt(el.style.paddingRight, 10) * KOEF_CHANGE_PUZZLE}px`;
//     fakeEl.style.paddingTop = `${parseInt(el.style.paddingTop, 10) * KOEF_CHANGE_PUZZLE}px`;
//     fakeEl.style.paddingBottom = `${parseInt(el.style.paddingBottom, 10) * KOEF_CHANGE_PUZZLE}px`;
//   });
// }
