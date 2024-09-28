import throttle from './throttle.js';
/**
 * Adds click event listener to the burger button and toggles classes,
 * ARIA attribute and body overflow property.
 *
 * @function
 * @returns {undefined}
 */
const menuToggle = () => {
  const logo = document.querySelector('.header__logo');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  burger.addEventListener('click', () => {
    logo.classList.toggle('header__logo--active');
    burger.classList.toggle('burger--active');
    burger.attributes['aria-expanded'].value = burger.classList.contains('burger--active');
    nav.classList.toggle('header__nav--active');
    document.body.classList.toggle('overflow-hidden');
  });

  const removeClassesPerWidth = throttle(() => {
    logo.classList.remove('header__logo--active');
    burger.classList.remove('burger--active');
    burger.classList.remove('burger--active');
    nav.classList.remove('header__nav--active');
    document.body.classList.remove('overflow-hidden');
  }, 500);

  window.addEventListener('resize', removeClassesPerWidth);
};

export { menuToggle };
