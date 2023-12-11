export default function showSizes(sizes) {
  return Object.keys(sizes).reduce(
    (a, b, i) =>
      a +
      `
     <!-- ${i + 1} -->
          <li class="size__item">
                <input
                  class="size__input"
                  type="radio"
                  id="${[b]}"
                  name="size"
                  data-name="${[b]}"
                  data-add="${sizes[b]["add-price"]}"
                  ${!i ? "checked" : ""}
                />
                <label class="size__btn" for="${[b]}">
                  <span class="size__img">${[b].toString().toUpperCase()}</span>
                  <span class="size__text">${sizes[b].size}</span></label
                >
              </li>
            `,
    ""
  );
}
