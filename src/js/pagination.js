import { FilmAPI } from './filmApi';
import { markupFilmCardHome } from './filmCardMarkUpHome';
import { refs } from './refs.js';
import Pagination from 'tui-pagination';
import arrowLeft from '../images/arrow-left.svg';

const filmApi = new FilmAPI();
export let pagination = {};
const container = document.querySelector('#pagination');

export const onPaginationBtnClick = e => {
  filmApi.page = e.page;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  if (filmApi.query !== null) {
    filmApi.fetchFilmsByQuery().then(response => {
      refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(
        response.data.results
      );
    });
  }
  filmApi.fetchTrendingFilms().then(response => {
    refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(
      response.data.results
    );
  });
};

filmApi.page = 1;
filmApi.fetchTrendingFilms().then(response => {
  refs.galleryCardLibraryEl = document.querySelector('.js-card-library');
  refs.galleryCardLibraryEl.innerHTML = markupFilmCardHome(
    response.data.results
  );

  const options = {
    totalItems: response.data.total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton: ({ type }) => {
        if (type === 'first') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }

        if (type === 'prev') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }

        if (type === 'next') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow next tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }

        if (type === 'last') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow next tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }
      },
      disabledMoveButton: ({ type }) => {
        if (type === 'first') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow is-hidden tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }

        if (type === 'prev') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow is-hidden tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }

        if (type === 'next') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow next is-hidden tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }

        if (type === 'last') {
          return (
            '<div class="custom-page-btn">' +
            `<img src="${arrowLeft}" class="arrow next is-hidden tui-ico-{{type}}" alt="arrow next" />` +
            '</div>'
          );
        }
      },
      moreButton:
        '<a href="#" class="tui-page-btn mobile-hidden tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip dots">...</span>' +
        '</a>',
    },
  };

  pagination = new Pagination(container, options);

  pagination.on('afterMove', onPaginationBtnClick);
});
