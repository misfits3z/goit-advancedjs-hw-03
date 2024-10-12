// 46457503-330abda4e6a20c9fb19d2e08a
// https://pixabay.com/api/
import { getPhotos } from "./js/pixabay-api";
import {createGalleryItems, initLightbox} from "./js/render-functions";


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

getPhotos('flowers').then(console.log).catch(console.error);

searchFormEl.addEventListener("submit", handleSearch)


function handleSearch(event){
    event.preventDefault();

const form = event.currentTarget;
const userQuery = form.elements.user_query.value.trim();

galleryEl.innerHTML = '';

const loader = document.querySelector('.loader');
loader.style.display = 'block';

getPhotos(userQuery).then(data => {
    // console.log(data.hits); 
    const galleryMarkup = createGalleryItems(data);
    galleryEl.insertAdjacentHTML('beforeend', galleryMarkup); 

    initLightbox();
  })
  .catch(console.error)
  .finally(() => {
    loader.style.display = 'none';
    form.reset();
});
}