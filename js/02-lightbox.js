import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('ul.gallery');
const photosMarkup = createGalleryItemMarkup(galleryItems);

function createGalleryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => `
      <li class='gallery_item'>
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `)
    .join('');
};

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
});

lightbox.on('show.simplelightbox');
