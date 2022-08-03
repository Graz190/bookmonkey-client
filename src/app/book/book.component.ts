import { Component} from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  title = 'bookmonkey';
  bookSearchTerm='';

  updateBookSearchTerm(inputEvent: Event){
    this.bookSearchTerm = (inputEvent.target as HTMLInputElement).value
  }
  goToBookDetails(book: Book){
    console.log('navigate to book details, soon...');
    console.log(book);
  }
  books:Book[] =[{
    title:"Herr der Ringe",
    author:'J R R Tolkien',
    abstract:'one Ring'
  },
  {title:"Harry Potter",
  author:'J.K.Roling',
  abstract:'Junge geht zur Schule'
},
{
  title:"Moby Dick",
  author:"Herman Melville",
  abstract:"Angler sucht Wal"
},
{
  title: 'How to win friends',
  author: 'Dale Carnegie',
  abstract: 'In this book ...'
}
]


}
