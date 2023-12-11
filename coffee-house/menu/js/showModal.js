import showAdditives from "./showAdditives.js";
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
           <p class="modal__description">
            ${description}
 <!-- sizes -->
          <div class="modal__sizes size">
            <p class="size__text">Size</p>
            <ul class="size__list">
          ${showSizes(sizes)}
           
          </p>
            </ul>
          </div>
          <div class="modal__additives additives">
            <p class="additives__text">Additives</p>
            <ul class="additives__list">
            ${showAdditives(additives)}
            </ul>
          </div>
          <div class="modal__price">
            <span class="modal__price-text">Total:</span>
            <span class="modal__price-number">$${price}</span>
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
