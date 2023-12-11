import showSizes from "./showSizes.js";

export default function showModal({
  name,
  description,
  price,
  sizes,
  additives,
  category,
  index,
}) {
  return `
  <div class="modal">
        <div class="modal__img-wrap">
          <img
            src="../assets/images/menu/${category}-${index + 1}.jpg"
            alt="${name}"
            class="modal__img"
          />
        </div>
        <div class="modal__describe-wrap">
          <h3 class="modal__name">${name}</h3>
 <!-- sizes -->
          <div class="modal__sizes size">
            <p class="size__text">Size</p>
            <ul class="size__list">
          ${showSizes(sizes)}
          <p class="modal__description">
            ${description}
          </p>
</ul>
          </div>
          <div class="modal__additives additives">
            <p class="additives__text">Additives</p>
            <ul class="additives__list">
              <li class="additives__item">
                <input
                  class="additives__input"
                  type="checkbox"
                  id="1"
                  data-name="1"
                />
                <label class="additives__btn" for="1">
                  <span class="additives__img">1</span>
                  <span class="additives__text">Sugar</span></label
                >
              </li>
              <li class="additives__item">
                <input
                  class="additives__input"
                  type="checkbox"
                  id="2"
                  data-name="2"
                />
                <label class="size__btn" for="2">
                  <span class="size__img">2</span>
                  <span class="size__text">Cinnamon</span></label
                >
              </li>
              <li class="additives__item">
                <input
                  class="additives__input"
                  type="checkbox"
                  id="3"
                  data-name="3"
                />
                <label class="size__btn" for="3">
                  <span class="size__img">3</span>
                  <span class="size__text">Syrup</span></label
                >
              </li>
            </ul>
          </div>
          <div class="modal__price">
            <span class="modal__price-text">Total:</span>
            <span class="modal__price-number">$7.00</span>
          </div>
          <div class="modal__info">
            <svg class="icon modal__info-icon" width="16" height="16">
              <use href="../assets/sprite.svg#info"></use>
            </svg>
            <p class="modal__info-text">
              The cost is not final. Download our mobile app to see the final
              price and place your order. Earn loyalty points and enjoy your
              favorite coffee with up to 20% discount.
            </p>
          </div>
          <button class="modal__btn">Close</button>
        </div>
      </div>
    `;
}
