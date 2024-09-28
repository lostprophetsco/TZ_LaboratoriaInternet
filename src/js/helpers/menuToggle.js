/**
 * @description Menu && classes toggle
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
  });
};

export { menuToggle };
