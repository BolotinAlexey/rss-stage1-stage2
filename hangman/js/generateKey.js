export default function generateKey(a, el) {
  return (
    a +
    `<li class="keyboard__item" data-key="${el}">
  <button class="keyboard__btn">${el}</button>
</li>
`
  );
}
