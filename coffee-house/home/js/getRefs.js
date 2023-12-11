export default function getRefs() {
  return {
    slider: document.querySelector(".slider"),
    sliderWindow: document.querySelector(".slider__window"),
    sliderList: document.querySelector(".slider__list"),
    tabs: document.querySelectorAll(".slider__input"),
    sliderBtns: document.querySelectorAll(".slider__btn"),
    sliderItems: document.querySelectorAll(".slider__item"),
  };
}
