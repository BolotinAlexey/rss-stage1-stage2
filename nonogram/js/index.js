import { nonogram } from "../assets/nonograms/5x5/1.js";
import calculateClues from "./calculateClues.js";
const { leftTotal, topTotal } = calculateClues(nonogram);
console.log(leftTotal, topTotal);
