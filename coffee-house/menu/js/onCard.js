export default function onCard(e) {
  const li = e.target.closest("li");
  if (!li || e.target.name === "UL") return;
  // console.log(li.firstElementChild.firstElementChild.alt);
  console.log(items.find((el) => li.dataset.name === el.name));
}
