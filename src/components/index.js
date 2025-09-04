import '../pages/index.css';
import { initialCards } from './cards.js';
import { enableValidation }  from './validate.js';
import { createCard} from './card.js';
import { openModal, closeModal } from './modal.js';

const profilePopup = document.querySelector('.popup_type_edit')
const cardPopup = document.querySelector('.popup_type_new-card')
export const imagePopup = document.querySelector('.popup_type_image')

const profilePopupEditButton = document.querySelector('.profile__edit-button')
const profilePopupClose = profilePopup.querySelector('.popup__close')

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
const profilrPopupForm = document.querySelector('.popup__form')

const profilePopupNameInput = profilePopup.querySelector('.popup__input_type_name')
const profilePopupDescriptionInput = profilePopup.querySelector('.popup__input_type_description')


const placesAddButton = document.querySelector('.profile__add-button')
const placesAddClose = cardPopup.querySelector('.popup__close')
const cardFormElement = cardPopup.querySelector('.popup__form')
const cardNameInput = cardPopup.querySelector('.popup__input_type_card-name')
const cardLinkInput = cardPopup.querySelector('.popup__input_type_url')

export const imageUrlPopup = imagePopup.querySelector('.popup__image')
export const imageCaptionPopup = imagePopup.querySelector('.popup__caption')
export const imagePopupClose = imagePopup.querySelector('.popup__close')

const popups = document.querySelectorAll('.popup')
popups.forEach(popup => popup.classList.add('popup_is-animated'))





const cards = initialCards.map(createCard)
const places = document.querySelector('.places__list')
places.append(...cards)

profilePopupEditButton.addEventListener('click', () => { 
  profilePopupNameInput.value = profileTitle.textContent
  profilePopupDescriptionInput.value = profileDescription.textContent
  openModal(profilePopup)
})

function handleProfileSubmit (evt) {
  evt.preventDefault()
  profileTitle.textContent = profilePopupNameInput.value
  profileDescription.textContent = profilePopupDescriptionInput.value
  closeModal(profilePopup)
}

profilrPopupForm.addEventListener('submit', handleProfileSubmit)
profilePopupClose.addEventListener('click', () => closeModal(profilePopup))



placesAddButton.addEventListener('click', () => {
  openModal(cardPopup)
})

placesAddClose.addEventListener('click', () => closeModal(cardPopup))

function handleCardFormSubmit (evt) {
  evt.preventDefault()
  const newCard = createCard({ name: cardNameInput.value, link: cardLinkInput.value })
  places.prepend(newCard)
  closeModal(cardPopup)
}

cardFormElement.addEventListener('submit', handleCardFormSubmit)
const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}
enableValidation(validationSettings);






