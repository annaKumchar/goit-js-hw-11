import './css/styles.css';
import { PixabayApiService } from './js/pixabay-service.js';

import createGalleryCards from './templates/gallery-card.hbs';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250,
});

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

const pixabayApiService = new PixabayApiService();

pixabayApiService.fetchPhotos();

formEl.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);



async function onSearch(e) {
  e.preventDefault();

  pixabayApiService.page = 1;
  pixabayApiService.searchQuery = e.target.elements.searchQuery.value.trim();

  if(pixabayApiService.searchQuery === '') { Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
  return;}

  try {
    const { data } = await pixabayApiService.fetchPhotos();
 console.log(data);
    if (data.totalHits <= pixabayApiService.per_page) {
      galleryEl.innerHTML = createGalleryCards(data.hits);
      loadMoreButton.classList.add('is-hidden');

      return;
    }
    if (data.totalHits === 0) {
      loadMoreButton.classList.add('is-hidden');
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      return;
    } galleryEl.innerHTML = createGalleryCards(data.hits);
      loadMoreButton.classList.remove('is-hidden');  
      lightbox.refresh();

  } catch (err) {
    console.log(err);
  }
}

async function onLoadMore() {
  pixabayApiService.page += 1;
  lightbox.refresh();

  try {
    const { data} = await pixabayApiService.fetchPhotos();
    galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.hits));

    if (data.hits.length <pixabayApiService.per_page) {
      loadMoreButton.classList.add('is-hidden');
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
    } else if(data.hits.length === 1 ) 
     { loadMoreButton.classList.add('is-hidden');}
    
  } catch (err) {
    console.log(err);
  }
}
