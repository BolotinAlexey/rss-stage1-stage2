import getRefs from "./getRefs.js";
import resetTabs from "./resetTabs.js";
const TIME = 250;
const RANGE__OFFSET = 5000 / TIME; // 20

let currentSlide = 0;
let rangeValue = 0;
let isHover = false;

const { tabs, sliderList } = getRefs();

let intervalID = setInterval(sliderHandler, TIME);

function sliderHandler() {
  if (rangeValue >= 20) changeSlide(++currentSlide);
  rangeValue += isHover ? RANGE__OFFSET : 0;
}

function changeSlide(slide) {
  currentSlide = slide > 2 ? 0 : slide < 0 ? 2 : slide;
  rangeValue = 0;
  resetTabs(tabs);
}
