export function setBook(obj) {
	localStorage.setItem("books", JSON.stringify(obj));
};