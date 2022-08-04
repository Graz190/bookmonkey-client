import { Component} from '@angular/core';
import { Observable} from 'rxjs';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{

  title = 'bookmonkey';
  bookSearchTerm='';
  books$!: Observable<Book[]>;

  constructor(private bookApiService: BookApiService){
  this.books$ = this.bookApiService.getAll();
  }

  updateBookSearchTerm(inputEvent: Event){
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value
  }
  goToBookDetails(book: Book){
    console.log('navigate to book details, soon...');
    console.log(book);
  }


}
