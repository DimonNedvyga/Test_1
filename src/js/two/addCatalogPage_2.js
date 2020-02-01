export function addCatalogPage_2() {
	let catalogPage_2 = document.querySelector('.catalog');
	catalogPage_2.innerHTML = '';
	for ( let book in JSON.parse(localStorage.getItem("books"))) {
	catalogPage_2.innerHTML += `<div data-id="${book}" class="book">
			Книга: ${JSON.parse(localStorage.getItem("books"))[book].nameBook}
		</div>`
	}
};