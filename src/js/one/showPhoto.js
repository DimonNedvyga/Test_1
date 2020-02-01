import {getBook} from './getBook.js';
export function showPhoto(id) {
	let photoBlock = document.querySelector('.container-photo');
	photoBlock.innerHTML = '';
		let arr = getBook();
			arr[id].photoList.forEach(function(item) {
				if (item !== '') {
					photoBlock.innerHTML += `<div class="photoShow"><a href="${item}" target="blank"><img src="${item}" alt="book"></a></div>`;
				} else {
					photoBlock.innerHTML = 'для этой книги нет фото';
				};
		});
};