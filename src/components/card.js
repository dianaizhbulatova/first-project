import { openModal, closeModal } from "./modal";
import { imagePopup, imageUrlPopup, imageCaptionPopup, imagePopupClose} from './index.js';

export function createCard({name, link}) {
  const template = document.querySelector('#card-template').content; 
  const card = template.cloneNode(true);
  const image = card.querySelector('.card__image');
  image.src = link;
  image.alt = name;
  card.querySelector('.card__title').textContent = name;
  functionCard(card, name, link)
  return card;
}

export function functionCard (card, name, link) {
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
