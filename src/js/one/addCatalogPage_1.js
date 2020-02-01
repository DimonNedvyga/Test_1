export function addCatalogPage_1() {
	let catalogPage_1 = document.querySelector('.catalog--v1');
	catalogPage_1.innerHTML = '';
	for ( let book in JSON.parse(localStorage.getItem("books"))) {
	catalogPage_1.innerHTML += `<div data-id="${book}" class="book">
			Книга: ${JSON.parse(localStorage.getItem("books"))[book].nameBook}
			<button class="delete">Удалить</button>
		</div>`
	};
};