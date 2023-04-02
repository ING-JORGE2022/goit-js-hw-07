import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
    </a>
  </li>
`).join('');

gallery.addEventListener('click', event => {
  event.preventDefault();
  const target = event.target;
  if (target.matches('img')) {
    const instance = basicLightbox.create(`<img src="${target.dataset.source}" width="800" height="600">`);
    instance.show();
    document.addEventListener('keydown', event => event.code === 'Escape' && instance.close());
  }
});
