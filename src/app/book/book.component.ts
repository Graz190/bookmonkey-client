import { Component} from '@angular/core';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  constructor(private bookData: BookApiService){}

  title = 'bookmonkey';

  books:Book[]=this.bookData.getAll();
  
  bookSearchTerm='';

  updateBookSearchTerm(inputEvent: Event){
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value
  }
  goToBookDetails(book: Book){
    console.log('navigate to book details, soon...');
    console.log(book);
  }


}
