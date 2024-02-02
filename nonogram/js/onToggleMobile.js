export default function onToggleMobile() {
  document.querySelector(".bg-mobile").classList.toggle("visibleMobile");
  document.querySelector(".mobile").classList.toggle("visibleMobile");
  document.querySelector("body").classList.toggle("visibleMobile");
  document.querySelector(".burger-wrap").classList.toggle("visibleMobile");
  // logo.classList.toggle("visibleMobile");
}
