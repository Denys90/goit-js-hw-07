import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const cardsMurkup = addMarkupToGellery(galleryItems);

gallery.addEventListener("click", onClickImg);
gallery.insertAdjacentHTML("afterbegin", cardsMurkup);

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

function onClickImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    retun;
  }

  const onCloseModal = (e) => {
    const ESC_KEY = "Escape";
    if (e.code === ESC_KEY) {
      istance.close();
    }
  };

  const istance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  istance.show();
}
