// JS
import {addCatalogPage_1} from './js/one/addCatalogPage_1.js';
import {selectDelete} from './js/one/selectDelete.js';
import {deleteElement} from './js/one/deleteElement.js';
import {search} from './js/one/search.js';
import {showResultSearch} from './js/one/showResultSearch.js';
import {selectBook} from './js/one/selectBook.js';
import {showPhoto} from './js/one/showPhoto.js';
// import {insertData} from './js/one/insertData.js';

// CSS
import style from './css/style.css';

addCatalogPage_1();

let catalog = document.querySelector('.catalog--v1');

catalog.addEventListener("click", function(event) {
	let idBook = selectBook(event);
	let idDelete = selectDelete(event);
	if (idDelete) {
		deleteElement(idDelete);
		addCatalogPage_1();
	};
	if (idBook) {
		showPhoto(idBook);
	};
});

document.querySelector('.search').addEventListener("click", function() {
	let str = document.querySelector('.search-value').value;
	let massIndex = search(str);
	showResultSearch(massIndex);
});


