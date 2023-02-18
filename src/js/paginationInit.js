import Pagination from 'tui-pagination';
import arrowLeft from '../images/arrow-left.svg';

const container = document.querySelector('#pagination');

const options = {
  totalItems: 20000,
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
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      `<img src="${arrowLeft}" class="arrow next tui-ico-{{type}}" alt="arrow next" />` +
      '</a>',

    disabledMoveButton:
      '<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      `<img src="${arrowLeft}" class="arrow tui-ico-{{type}}" alt="arrow next" />` +
      '</a>',

    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip dots">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(container, options);
