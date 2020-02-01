import {getBook} from './getBook.js';
export function search(str) {
	let arr = getBook();
	let mass = [];
	arr.forEach(function(item,index) {
		if ( item.nameBook.match(String(str)) ) {
			mass.push(index);   
		};
	});
	return mass;
};