import getRefs from "./getRefs.js";
import resetTabs from "./resetTabs.js";
const TIME = 125;
const RANGE_OFFSET = 5000 / TIME;
const MAX_VALUE = 100;
let currentSlide = 0;
let rangeValue = 0;
let isHover = false;
let isDrag = false;
let x0, x;

const { tabs, sliderList, sliderBtns, sliderItems, slider, sliderWindow } =
  getRefs();

let intervalID = setInterval(sliderHandler, TIME);

// pause carousel handlers
sliderWindow.addEventListener("touchstart", () => {
  isHover = true;
});
sliderWindow.addEventListener("touchend", () => {
  isHover = false;
});

sliderWindow.addEventListener("mouseover", () => {
  isHover = true;
});
sliderWindow.addEventListener("mouseout", () => {
  isHover = false;
});

// swipe handlers
slider.addEventListener("mousedown", onStartDrag);
slider.addEventListener("touchstart", onStartDrag);

slider.addEventListener("touchmove", (e) => (x = e.touches[0].clientX));

slider.addEventListener("mouseup", onEndDrag);
slider.addEventListener("touchend", onEndDrag);

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

function onStartDrag(e) {
  x0 = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
}
function onEndDrag(e) {
  e.preventDefault();
  x = e.type === "mouseup" ? e.clientX : x;
  if (x - x0 > slider.clientWidth / 5) changeSlide(currentSlide - 1);
  if (x - x0 < -slider.clientWidth / 5) changeSlide(currentSlide + 1);
}
