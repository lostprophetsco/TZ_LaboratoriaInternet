/**
 * @description Adds or removes a CSS class based on the scroll position of an element.
 * @param {string} element The CSS selector or element to target. Can be any string with a CSS selector.
 * @param {string} className The CSS class to add or remove. Can be any string.
 * @param {string} screenPoint The side of window to target. Can be `top`, `center`, or `bottom`.
 * @param {number} indent The amount of pixels to indent the element by. Can be negative.
 */
const scrollTopClassHandler = (element, className, screenPoint = 'center', indent = 0) => {
  const el = document.querySelector(element);
  let elScreenPoint = undefined;

  switch (screenPoint) {
    case 'top':
      elScreenPoint = window.scrollY + el.getBoundingClientRect().top;
      break;
    case 'center':
      elScreenPoint =
        window.scrollY +
        el.getBoundingClientRect().top -
        window.innerHeight / 2 +
        el.getBoundingClientRect().height / 2;
      break;
    case 'bottom':
      elScreenPoint = window.scrollY + el.getBoundingClientRect().top - window.innerHeight;
      break;
  }

  if (window.scrollY + indent > elScreenPoint) {
    el.classList.add(className);
  } else {
    el.classList.remove(className);
  }
};

export default scrollTopClassHandler;
