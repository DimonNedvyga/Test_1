import {getBook} from './getBook.js';
import {setBook} from './setBook.js';
export function deleteElement(id) {
   let arr = getBook();
   arr.splice(id,1);
   setBook(arr);
};