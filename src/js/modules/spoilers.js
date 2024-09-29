const spoilers = () => {
  const spoilers = document.querySelectorAll('.spoiler__title');
  if (spoilers.length > 0) {
    spoilers.forEach((spoiler) => {
      const text = spoiler.nextElementSibling;
      spoiler.addEventListener('click', () => {
        spoiler.parentElement.classList.toggle('spoiler--expanded');

        if (text.getBoundingClientRect().height === 0) {
          text.style.maxHeight = text.scrollHeight + 'px';
        } else {
          text.style.maxHeight = 0;
        }
      });
    });
  }
};

export default spoilers;
