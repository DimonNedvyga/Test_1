export function selectDelete(event) {
	if (event.target.matches('.book > .delete')) {
		let id = event.target.parentNode.getAttribute('data-id');
		return id;
	};
};