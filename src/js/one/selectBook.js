export function selectBook(event) {
	let listBook = document.querySelectorAll('.book');
	listBook.forEach(function(item) {
		item.classList.remove('select');
	});
	let idBook;
	listBook.forEach(function(item) {
		if ( item === event.target ) {
			idBook = event.target.getAttribute('data-id');
			item.classList.add('select');
		};
	});
	return idBook;
};