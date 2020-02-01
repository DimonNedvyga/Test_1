import {getBook} from './getBook.js';
export function showResultSearch(massIndex) {
	let data = getBook();
	let catalogPage_1 = document.querySelector('.catalog--v1');
	catalogPage_1.innerHTML = '';
	for ( let book in data ) {
		for ( let i in massIndex ) {
		if (Number(book) === massIndex[i] ){
			catalogPage_1.innerHTML += `<div data-id="${book}" class="book">
			Книга: ${data[book].nameBook}
			<button class="delete">Удалить</button>
		</div>`
			};
		};
	};

};