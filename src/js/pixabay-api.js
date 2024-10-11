
const BASE_URL = 'https://pixabay.com/api/' ;
const API_KEY = '46457503-330abda4e6a20c9fb19d2e08a';

function getPhotos(query){

    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });     
    
}

export{getPhotos};