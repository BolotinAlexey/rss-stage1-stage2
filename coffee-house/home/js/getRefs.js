export default function getRefs() {
  return {
    tabs: document.querySelectorAll(".slider__input"),
    sliderList: document.querySelector(".slider__list"),
    sliderBtns: document.querySelectorAll(".slider__btn"),
  };
}
