export function openModal(popup) {
    popup.classList.add('popup_is-opened')
    popup.addEventListener('keydown', closeEsc)
    popup.addEventListener('click', closeOverlay)

    const closeButton = popup.querySelector('.popup__close');
    if (closeButton) {
      closeButton.addEventListener('click', () => closeModal(popup));
    }
}

export function closeModal(popup) {
    popup.classList.remove('popup_is-opened')
    popup.removeEventListener('click', closeOverlay);
    document.removeEventListener('keydown', closeEsc);
    clearErrors(popup);
    disablePopupButton(popup);
}

function clearErrors(popup) {
    const errorElements = popup.querySelectorAll('.popup__error');
    const inputs = popup.querySelectorAll('.popup__input');
    errorElements.forEach(errorElement => {
        errorElement.textContent = '';
        errorElement.classList.remove('popup__error_visible');
    });

    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

function closeEsc(evt) {
    if (evt.key === "Escape") closeModal(document.querySelector('.popup_is-opened'));
}

function closeOverlay (evt) {
    if (evt.target.classList.contains('popup_is-opened') ) closeModal(evt.target)
}

function disablePopupButton(popup) {
    const submitButton = popup.querySelector('.popup__button');
    if (submitButton) {
      submitButton.classList.add('popup__button_disabled');
      submitButton.setAttribute('disabled', true);
    }
}

