function showError(input, errorElement, errorText, validationSettings) {
    errorElement.textContent = errorText;
    errorElement.classList.add(validationSettings.errorClass);
    input.classList.add(validationSettings.inputErrorClass)
}
  
function hideError(input, errorElement, validationSettings) {
    errorElement.textContent = "";
    errorElement.classList.remove(validationSettings.errorClass);
    input.classList.remove(validationSettings.inputErrorClass)
}

function checkInputValidity(input, form, validationSettings) {
  const errorElement = form.querySelector(`.popup__error_type_${input.name}`);
  if (input.validity.valid) {
      hideError(input, errorElement, validationSettings);
  } else {
      showError(input, errorElement, input.validationMessage, validationSettings);
  }
}

function toggleButtonState(inputs, button, validationSettings) {
    const isFormValid = inputs.every(input => input.validity.valid);
    if (isFormValid) {
      button.classList.remove(validationSettings.inactiveButtonClass);
      button.removeAttribute('disabled');
    } else {
      button.classList.add(validationSettings.inactiveButtonClass);
      button.setAttribute('disabled', true);
    }
}

function setEventListeners(form, validationSettings) {
    const inputs = Array.from(form.querySelectorAll(validationSettings.inputSelector));
    const button = form.querySelector(validationSettings.submitButtonSelector);
  
    toggleButtonState(inputs, button, validationSettings);
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValidity(input, form, validationSettings);
        toggleButtonState(inputs, button, validationSettings);
      });
    });
}

export function enableValidation(validationSettings) {
    const forms = document.querySelectorAll(validationSettings.formSelector);
    forms.forEach(form => {
      setEventListeners(form, validationSettings);
    });
}