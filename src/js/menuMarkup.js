import menu from '../menu.json';
import menuCard from '../handlebars/menuCard.handlebars';

const refs = {
    menuList: document.querySelector('.menu__list'),
}

const menuMarkup = menuCard(menu);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);

console.log(refs.menuList);