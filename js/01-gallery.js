import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const cardsMurkup = addMarkupToGellery(galleryItems);
gallery.insertAdjacentHTML("beforebegin", cardsMurkup);

function addMarkupToGellery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
           data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}
