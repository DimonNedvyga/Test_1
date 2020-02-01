// JS
import {getBook} from './js/two/getBook.js';
import {setBook} from './js/two/setBook.js';
import {addCatalogPage_2} from './js/two/addCatalogPage_2.js';
import {select} from './js/two/selectPage_2.js';
import {insertData} from './js/two/insertData.js';
import {saveData} from './js/two/saveData.js';
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
} from './js/two/getElementPage_2.js';

// CSS
import style from './css/style.css';


addCatalogPage_2();

create.addEventListener("click", function() {
	
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
	console.log(object.photoList);
	let arr = [];
	arr = getBook();
	if (arr === null ) {
		arr = [];
	};
	arr.push(object);
	setBook(arr);
	addCatalogPage_2();
});


let id;
cat.addEventListener("click", function(event) {
	let dataId = select(event);
	insertData(dataId);
	id = dataId;
	return id;
});


save.addEventListener("click", function() {
	saveData(id);
});