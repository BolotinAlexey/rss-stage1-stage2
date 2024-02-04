export default function generateHeader() {
  return `
  <!-- H E A D E R -->
    <header class="header">
      <div class="header__wrap">
        <h1 class="header__title">Nonograms</h1>
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <a
                href="https://rolling-scopes-school.github.io/bolotinalexey-JSFE2023Q4/hangman"
                class="header__link"
                >Hangman</a
              >
            </li>
            <li class="header__item">
              <a
                href="https://bolotinalexey.github.io/rss-stage0/random-game/"
                class="header__link"
                >1024</a
              >
            </li>
            <li class="header__item">
              <a
                href="https://bolotinalexey.github.io/cssMemeSlider/cssMemeSlider/"
                class="header__link"
                >Meme slider</a
              >
            </li>
            <li class="header__item">
              <a
                href="https://bolotinalexey.github.io/rss-stage0/audio-player/"
                class="header__link"
                >Audio player</a
              >
            </li>
            <li class="header__item">
              <a
                href="https://bolotinalexey.github.io/rss-stage0/image-gallery/"
                class="header__link"
                >Image gallery</a
              >
            </li>
            <li class="header__item">
              <a
                href="https://bolotinalexey.github.io/rss-stage0/library/"
                class="header__link"
                >Library</a
              >
            </li>
            <li class="header__item">
              <a
                href="https://rolling-scopes-school.github.io/bolotinalexey-JSFE2023Q4/coffee-house/home/index.html"
                class="header__link"
                >Coffee house</a
              >
            </li>
          </ul>
        </nav>

         <button class="table-button">
              <span>
                <svg class="table-button__icon" width="50" height="50">
                  <use href="./assets/sprite.svg#table"></use>
                </svg>
              </span>
            </button>

        <label class="theme-btn">
        <svg class="weather__icon" width="20" height="20">
                  <use href="./assets/sprite.svg#sun"></use>
                </svg>
          <input type="checkbox" class="theme-btn__input">
          </input>
          <span class="theme-btn__inner">
          </span>
          <svg class="weather__icon" width="20" height="20">
                  <use href="./assets/sprite.svg#moon"></use>
                </svg>
        </label>

        <div class="burger-wrap">
          <ul class="burger">
            <li class="burger__line"></li>
            <li class="burger__line"></li>
            <li class="burger__line"></li>
          </ul>
        </div>
      </div>
      <!-- M O B I L E -->

      <div class="bg-mobile">
        <div class="mobile">
          <nav class="mobile__nav">
            <ul class="mobile__nav__list">
              <li class="mobile__nav__item">
                <a
                  href="https://rolling-scopes-school.github.io/bolotinalexey-JSFE2023Q4/hangman"
                  class="mobile__nav__link"
                  >Hangman</a
                >
              </li>
              <li class="mobile__nav__item">
                <a
                  href="https://bolotinalexey.github.io/rss-stage0/random-game/"
                  class="mobile__nav__link"
                  >1024</a
                >
              </li>
              <li class="mobile__nav__item">
                <a
                  href="https://bolotinalexey.github.io/cssMemeSlider/cssMemeSlider/"
                  class="mobile__nav__link"
                  >Meme slider</a
                >
              </li>
              <li class="mobile__nav__item">
                <a
                  href="https://bolotinalexey.github.io/rss-stage0/audio-player/"
                  class="mobile__nav__link"
                  >Audio player</a
                >
              </li>
              <li class="mobile__nav__item">
                <a
                  href="https://bolotinalexey.github.io/rss-stage0/image-gallery/"
                  class="mobile__nav__link"
                  >Image gallery</a
                >
              </li>
              <li class="mobile__nav__item">
                <a
                  href="https://bolotinalexey.github.io/rss-stage0/library/"
                  class="mobile__nav__link"
                  >Library</a
                >
              </li>
              <li class="mobile__nav__item">
                <a
                  href="https://rolling-scopes-school.github.io/bolotinalexey-JSFE2023Q4/coffee-house/home/index.html"
                  class="mobile__nav__link"
                  >Coffee house</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `;
}
