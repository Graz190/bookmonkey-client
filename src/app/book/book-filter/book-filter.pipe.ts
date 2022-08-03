import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books : Book[] |null, searchTerm: string): Book[] {

    if (books === null) return [];
    return books
    .filter((book:Book)=> book.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
/*return Object.keys(book)
*      .filter(key => typeof book[key] === 'string')
*      .some(key => book[key].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
*/
}
