const profilePopup = document.querySelector('.popup_type_edit')
const cardPopup = document.querySelector('.popup_type_new-card')
const imagePopup = document.querySelector('.popup_type_image')

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

const imageUrlPopup = imagePopup.querySelector('.popup__image')
const imageCaptionPopup = imagePopup.querySelector('.popup__caption')
const imagePopupClose = imagePopup.querySelector('.popup__close')

const popups = document.querySelectorAll('.popup')
popups.forEach(popup => popup.classList.add('popup_is-animated'))

function openModal(popup) {
    popup.classList.add('popup_is-opened')
}

function closeModal(popup) {
    popup.classList.remove('popup_is-opened')
}

function functionCard (card, name, link) {
  const deleteButton = card.querySelector('.card__delete-button')
  const closestCard = deleteButton.closest('.card')
  deleteButton.addEventListener('click', () => closestCard.remove())

  const likeButton = card.querySelector('.card__like-button')
  likeButton.addEventListener("click", () => likeButton.classList.toggle("card__like-button_is-active"));

  const image = card.querySelector('.card__image')
  image.addEventListener('click', () => {
    imageUrlPopup.src = link
    imageCaptionPopup.textContent = name
    openModal(imagePopup)
  })
  imagePopupClose.addEventListener('click', () => closeModal(imagePopup))
}

const template = document.querySelector('#card-template').content; 

function createCard({name, link}) {
  const card = template.cloneNode(true);
  const image = card.querySelector('.card__image');
  image.src = link;
  image.alt = name;
  card.querySelector('.card__title').textContent = name;
  functionCard(card, name, link)
  return card;
}

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





