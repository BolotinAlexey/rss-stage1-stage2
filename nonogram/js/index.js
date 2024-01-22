import { nonogram } from "../assets/nonograms/5x5/1.js";
import calculateClues from "./calculateClues.js";
import createElandClass from "./createElandClass.js";
import generateGrid from "./generateGrid.js";

const body = document.querySelector("body");

const main = createElandClass("main", ["page"]);
const grid = createElandClass("section", ["grid"]);
main.append(grid);
body.append(main);

generateGrid({ ...calculateClues(nonogram), nonogram });
