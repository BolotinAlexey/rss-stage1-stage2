export default function showAdditives(additives) {
  console.log(Object.keys(additives));
  return Object.values(additives).reduce(
    (a, b, i) =>
      a +
      `
     <!-- ${i + 1} -->
             <li class="additives__item">
                <input
                  class="additives__input"
                  type="checkbox"
                  id="${b.name}"
                  data-name="${b.name}"
                   data-add="${b["add-price"]}"
                />
                <label class="additives__btn" for="${b.name}">
                  <span class="additives__img">${i + 1}</span>
                  <span class="additives__text">${b.name}</span></label
                >
              </li>
            `,
    ""
  );
}
