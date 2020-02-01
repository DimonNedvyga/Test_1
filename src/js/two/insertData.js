import {getBook} from './getBook.js';
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
export function insertData(dataId) {
			let data = getBook();

			nameBook.value = data[dataId].nameBook;
			authorsBook.value = data[dataId].authors;
			datePublish.value = data[dataId].dataPublish;
			namePublish.value = data[dataId].namePublish;
			adressPublish.value = data[dataId].adressPublish;
			phonePublish.value = data[dataId].phonePublish;
			category.value = data[dataId].category;
			photo.value = data[dataId].photoList;
};