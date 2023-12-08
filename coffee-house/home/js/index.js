import getRefs from "./getRefs.js";
import resetTabs from "./resetTabs.js";
const TIME = 125;
const RANGE_OFFSET = 5000 / TIME;
const MAX_VALUE = 100;
let currentSlide = 0;
let rangeValue = 0;
let isHover = false;

const { tabs, sliderList, sliderBtns, sliderItems, slider, sliderWindow } =
  getRefs();

let intervalID = setInterval(sliderHandler, TIME);

sliderWindow.addEventListener("touchstart", () => swipeHandlerMobile);
sliderWindow.addEventListener("mousedown", () => swipeHandlerDesktop);

// pause carousel handlers
sliderWindow.addEventListener("mouseover", () => {
  isHover = true;
});
// sliderWindow.addEventListener("touchend", () => {
//   isHover = false;
// });
sliderWindow.addEventListener("mouseout", () => {
  isHover = false;
});

// slider.addEventListener("touchstart", swipeHandler);

sliderBtns[0].addEventListener("click", () => changeSlide(currentSlide - 1));
sliderBtns[1].addEventListener("click", () => changeSlide(currentSlide + 1));

function sliderHandler() {
  if (rangeValue >= MAX_VALUE) {
    changeSlide(currentSlide + 1);
    return;
  }
  rangeValue += isHover ? 0 : MAX_VALUE / RANGE_OFFSET;
  tabs[currentSlide].value = rangeValue;
}

function changeSlide(slide) {
  currentSlide = slide > 2 ? 0 : slide < 0 ? 2 : slide;
  rangeValue = 0;
  resetTabs(tabs);
  sliderList.style.transform = `translateX(-${currentSlide * 33.333}%)`;
}

function swipeHandlerMobile(e) {
  isHover = true;
}
function swipeHandlerDesktop(e) {
  isHover = true;
}
