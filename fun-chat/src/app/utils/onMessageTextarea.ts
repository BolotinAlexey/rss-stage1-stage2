export default function onMessageTextarea(e: Event) {
  const { target } = e;
  e.preventDefault();
  if (!(target instanceof HTMLFormElement)) throw new Error("Form isn't form");
  if (!(target.elements[0] instanceof HTMLInputElement))
    throw new Error("Input isn't input");

  console.log(target.elements[0].value);
  target.reset();
}
