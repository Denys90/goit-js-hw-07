import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardsMurkup = addMarkupToGellery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", cardsMurkup);

function addMarkupToGellery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsDelay: 250,
  captionsData: "alt",
});
