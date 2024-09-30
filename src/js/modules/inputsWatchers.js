/**
 * Function to watch input fields and add/remove classes
 * @param {string} inputClass - class name of the input elements
 * @param {string} inputType - type of input (tel, text)
 * @description
 * This function is used to watch input fields and add/remove classes
 * based on the input field value.
 * The input field is watched for the 'input', 'focus', and 'blur' events.
 * If the input field value is not empty, the class 'input__label--filled' is added.
 * If the input field value is empty, the class 'input__label--filled' is removed.
 * If the input field has a required attribute and the input field value is empty, the class 'input__label--error' is added.
 * If the input field value is not empty, the class 'input__label--error' is removed.
 * If the input field type is 'tel', the input field value is formatted to '+7-XXX-XXX-XX-XX'.
 * If the input field type is 'text', the input field value is sanitized to remove any non-word characters.
 * If the input field type is 'tel' and the input field value length is equal to 13, the class 'input__label--success' is added.
 * If the input field type is 'text' and the input field value is not empty, the class 'input__label--success' is added.
 */
const inputsWatchers = (inputClass, inputType) => {
  const inputs = document.querySelectorAll(inputClass);
  if (inputs.length > 0) {
    inputs.forEach((input) => {
      let errorState = false;
      const errorElement = input.parentElement.querySelector('.input__error');

      const errorHandler = () => {
        if (errorState) {
          errorElement.classList.add('input__error--visible');
        } else {
          errorElement.classList.remove('input__error--visible');
        }
      };

      input.addEventListener('input', () => {
        if (input.value !== '') {
          input.parentElement.classList.add('input__label--filled');
        } else {
          input.parentElement.classList.remove('input__label--filled');
        }

        if (inputType === 'tel') {
          input.value = input.value.replace(/\D/g, '');
        }

        if (inputType === 'text') {
          input.value = input.value.replace(/[^\w\s]/gi, '');
        }

        if (inputType === 'text' && input.value.length !== 0) {
          input.parentElement.classList.remove('input__label--error');
          input.parentElement.classList.add('input__label--success');
          errorState = false;
        } else if (inputType === 'text' && input.value.length === 0) {
          input.parentElement.classList.add('input__label--error');
          input.parentElement.classList.remove('input__label--success');
          errorState = true;
        }

        if (inputType === 'tel' && input.value.length >= 11) {
          input.parentElement.classList.remove('input__label--error');
          input.parentElement.classList.add('input__label--success');
          errorState = false;
        } else if (inputType === 'tel' && input.value.length < 11) {
          input.parentElement.classList.add('input__label--error');
          input.parentElement.classList.remove('input__label--success');
          errorState = true;
        }

        errorHandler();
      });

      input.addEventListener('focus', () => {
        input.parentElement.classList.add('input__label--focused');
      });

      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('input__label--focused');

        if (input.value === '' && input.hasAttribute('required')) {
          input.parentElement.classList.add('input__label--error');
          input.parentElement.classList.remove('input__label--success');
          errorState = true;
        } else if (input.value !== '' && input.hasAttribute('required')) {
          input.parentElement.classList.remove('input__label--error');
          input.parentElement.classList.add('input__label--success');
          errorState = false;
        }

        if (inputType === 'tel' && input.value.length < 11) {
          input.parentElement.classList.add('input__label--error');
          input.parentElement.classList.remove('input__label--success');
          errorState = true;
        } else if (inputType === 'tel' && input.value.length >= 11) {
          input.parentElement.classList.remove('input__label--error');
          input.parentElement.classList.add('input__label--success');
          errorState = false;
        }

        errorHandler();
      });
    });
  }
};

export default inputsWatchers;
