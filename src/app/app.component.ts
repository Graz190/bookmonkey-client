import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmonkey';

  goToBookDetails(book: Book){
    console.log('navigate to book details, soon...');
    console.log(book);
  }
  book:Book ={
    title:"Herr der Ringe",
    author:'J R R Tolkien',
    abstract:'one Ring'
  }

}
