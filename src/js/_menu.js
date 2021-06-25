import menu from '../json/menu.json';
import menuTemplate from '../templates/menu.hbs';

const allMenu = document.querySelector('.js-menu');

allMenu.innerHTML = menuTemplate(menu);
