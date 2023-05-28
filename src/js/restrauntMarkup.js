import restaurants from '../menu.json';
import restrauntMenuItem from '../handlebars/restrauntCard.handlebars';

const refs = {
    restrauntList: document.querySelector('.restraunt__list'),
}

const restrauntMarkup = restrauntMenuItem(restaurants);
refs.restrauntList.insertAdjacentHTML('beforeend', restrauntMarkup);