import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'; 

const createGalleryItems = ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>
      <div class="gallery-info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </li>`;
  
  
  
//   const galleryMarkup = data.hits.map(createGalleryItems).join('');
//   galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
  
  
//   const lightbox = new SimpleLightbox('.gallery a', {
//     captions: true,
//     captionsData: 'alt', 
//     captionDelay: 250,   
//     animationSpeed: 300  
//   });

export default createGalleryItems;