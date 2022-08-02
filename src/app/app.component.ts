import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmonkey';
  book:Book ={
    title:"Herr der Ringe",
    author:'J R R Tolkien',
    abstract:'one Ring'
  }

}
