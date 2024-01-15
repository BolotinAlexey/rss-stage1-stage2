import createElandClass from "./createElandClass.js";

export default function redirectTolinkedIn() {
  const modal = createElandClass("div", ["modal", "welcome"]);
  document.querySelector("body").append(modal);
  const title = createElandClass(
    "h2",
    ["modal__title"],
    "Then welcome to my LinkedIn page.."
  );
  modal.append(title);

  setTimeout(function () {
    window.location.href = "https://www.linkedin.com/in/oleksii-bolotin/";
  }, 3000);
}
