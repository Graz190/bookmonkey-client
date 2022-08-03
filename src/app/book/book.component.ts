import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy{

  subscription! : Subscription
  constructor(private bookApiService: BookApiService){}

  books:Book[]=[];

  title = 'bookmonkey';

  bookSearchTerm='';

  ngOnInit() {
    this.subscription= this.bookApiService.getAll().subscribe({
      next: (books: Book[])=>this.books=books,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateBookSearchTerm(inputEvent: Event){
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value
  }
  goToBookDetails(book: Book){
    console.log('navigate to book details, soon...');
    console.log(book);
  }


}
