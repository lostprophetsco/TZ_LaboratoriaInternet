import { menuToggle } from './helpers/menuToggle.js';
import spoilers from './modules/spoilers.js';
import Glide, {
  Controls,
  Breakpoints,
  Swipe,
  Keyboard,
} from '@glidejs/glide/dist/glide.modular.esm';

menuToggle();
spoilers();

const glideOptions = {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 32,
  keyboard: true,
  perTouch: 1,
  breakpoints: {
    1440: {
      perView: 3,
      gap: 32,
    },
    1024: {
      perView: 2,
      gap: 24,
    },
    768: {
      gap: 24,
      perView: 2,
    },
    560: {
      gap: 24,
      perView: 1,
    },
  },
};

const glideMount = { Controls, Breakpoints, Swipe, Keyboard };
const reviewsSlider = document.querySelector('.reviews__slider');

if (reviewsSlider) {
  // count how many slides there are
  const dotCount = document.querySelectorAll('.reviews__slides > .card-review').length;

  // Generate the HTML for the navigation dots
  let dotHTML = '';
  for (let i = 0; i < dotCount; i++) {
    dotHTML += `<button class="reviews__slide-bullet glide__bullet" data-glide-dir="=${i}"></button>`;
  }

  // Add the dots HTML to the DOM
  document
    .querySelector('.reviews__slider > .glide__bullets')
    .insertAdjacentHTML('beforeend', dotHTML);

  new Glide(reviewsSlider, glideOptions).mount(glideMount);
}
