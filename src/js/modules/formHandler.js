const formHandler = () => {
  const form = document.querySelector('.form__form');
  const nameInput = form.querySelector('.input__input[name="name"]');
  const phoneInput = form.querySelector('.input__input[name="phone"]');
  const checkbox = form.querySelector('.checkbox');
  const submitBtn = form.querySelector('.form__submit');
  const loader = document.querySelector('.form__loader');
  const loaderInitialText = loader.textContent;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    form.classList.add('form--loading');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(() => {
          loader.textContent = 'Отправлено';

          setTimeout(() => {
            form.classList.remove('form--loading');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить';
            nameInput.value = '';
            phoneInput.value = '';
            nameInput.parentElement.classList.remove('input__label--filled');
            phoneInput.parentElement.classList.remove('input__label--filled');
            nameInput.parentElement.classList.remove('input__label--success');
            phoneInput.parentElement.classList.remove('input__label--success');
            checkbox.value = false;
            form.reset();
            loader.textContent = '';
          }, 2000);
        });
    }, 2000);
    loader.textContent = loaderInitialText;
  });
};

export default formHandler;
