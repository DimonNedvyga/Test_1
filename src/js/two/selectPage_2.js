import {insertData} from './insertData.js';
export function select(event) {
	let dataId;
	document.querySelectorAll('.book').forEach(function(item) {
		item.classList.remove('select');
	});
	document.querySelectorAll('.book').forEach(function(item) {
		if ( event.target === item ) {
			item.classList.add('select');
			dataId = item.getAttribute('data-id');
			return dataId;
		};
	});
	return  dataId;
};