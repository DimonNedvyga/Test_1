export function getBook() {
	let listBooks = JSON.parse(localStorage.getItem("books"));
	return listBooks;
};