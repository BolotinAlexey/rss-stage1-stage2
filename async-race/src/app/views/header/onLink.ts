import { getElementDocument } from "../../services/supFunctions";

export default function onLink(e: Event, name: string) {
  const currentActive: HTMLElement = getElementDocument(".active");

  if (currentActive) currentActive.classList.remove("active");

  if (e.target && e.target instanceof HTMLElement)
    e.target.classList.add("active");
  console.log(name);
  
}
