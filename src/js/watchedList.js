import { markupFilmCardLibrary } from './filmCardMarkUpLibrary';
import { refs } from './refs.js';
import popcornImgPath from '../images/popcorn.svg-min.png';


if (window.location.pathname === '/project-js-filmoteka/library.html') {
  // refs.btnHeaderWatchedEl.classList.add("btn-active");
  if (!refs.btnHeaderWatchedEl.classList.contains("btn-active")) {
    refs.btnHeaderWatchedEl.classList.replace("btn-header","btn-active");
  }
  refs.btnHeaderWatchedEl.addEventListener('click', onBtnHeaderWatchedClick);  
  rerenderWatchedLib();
}

function onBtnHeaderWatchedClick() {
  if (refs.btnHeaderQueueEl.classList.contains("btn-active")) {
    refs.btnHeaderQueueEl.classList.replace("btn-active","btn-header");
  }
  // refs.btnHeaderWatchedEl.classList.replace("btn-header", "btn-active");
  
  rerenderWatchedLib();
}

export function rerenderWatchedLib() {
  console.log('we are in render w');
  let watchedSavedList = localStorage.getItem('watchedList');
  const watchedParsedList = JSON.parse(watchedSavedList) || [];

  if (watchedParsedList.length === 0) {
    refs.myLibraryGalleryEl.innerHTML = renderDefaultWatchedNotification();
    console.log('ul', refs.myLibraryGalleryEl);
    return;
  }
  refs.myLibraryGalleryEl.innerHTML = markupFilmCardLibrary(watchedParsedList);
}

function renderDefaultWatchedNotification() {
  return `<img src="${popcornImgPath}" alt="popcorn picture" width="150">
  <p class="notification-library">You haven't added any films to watched...</p>`;
}
