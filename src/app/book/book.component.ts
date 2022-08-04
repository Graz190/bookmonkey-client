import { Component, OnInit} from '@angular/core';
import { Route } from '@angular/router';
import { Observable} from 'rxjs';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  title = 'bookmonkey';
  bookSearchTerm='';
  books$!: Observable<Book[]>;
  
  constructor(private bookApiService: BookApiService){

  }
  ngOnInit(): void {

    this.books$ = this.bookApiService.getAll().pipe(
      
    )
    };
  

  updateBookSearchTerm(inputEvent: Event){
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value
  }
  goToBookDetails(book: Book){
    //this.router.navigate(['/books/details',book.isbn])
    console.log('navigate to book details, soon...');
    console.log(book);
  }


}
