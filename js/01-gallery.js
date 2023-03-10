import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const boxMarkap = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryBox.innerHTML = boxMarkap;

galleryBox.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);
  instance.show();

  galleryBox.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
