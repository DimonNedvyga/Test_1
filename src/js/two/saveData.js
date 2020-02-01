import {getBook} from './getBook.js';
import {setBook} from './setBook.js';
import {addCatalogPage_2} from './addCatalogPage_2.js';
import {
	create,
	nameBook,
	authorsBook,
	datePublish,
	namePublish,
	adressPublish,
	phonePublish,
	category,
	cat,
	save,
	photo
} from './getElementPage_2.js';
export function saveData(id) {

	// let nameBook = document.querySelector('.name-book');
	// let authorsBook = document.querySelector('.authors');
	// let datePublish = document.querySelector('.date-publish');
	// let namePublish = document.querySelector('.name-publish');
	// let adressPublish = document.querySelector('.adress-publish');
	// let phonePublish = document.querySelector('.phone-publish');
	// let category = document.querySelector('.category');

	let object = {
		nameBook: nameBook.value, 
		authors: authorsBook.value,
		dataPublish: datePublish.value,
		namePublish: namePublish.value,
		adressPublish: namePublish.value,
		phonePublish: phonePublish.value,
		category: category.value,
		photoList: photo.value.split(",")
	};
	let arr = [];
	arr = getBook();
	arr.splice(id, 1 , object);
	setBook(arr);
	addCatalogPage_2();
};