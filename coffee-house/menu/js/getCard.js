export default function getCard({ name, description, price, category, index }) {
  return `
  <li class="cards__item" data-name="${name}">
            <div class="cards__img-wrap">
              <img
                src="../assets/images/menu/${category}-${index}.jpg"
                alt="${name}"
                class="cards__img"
              />
            </div>
            <div class="cards__text">
              <h3 class="cards__name">${name}</h3>
              <p class="cards__description">${description}
              </p>
              <h3 class="cards__price">$${price}</h3>
            </div>
          </li>
    `;
}
