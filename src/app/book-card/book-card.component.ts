import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() content!:Book;

  handleDetailsClick(click: MouseEvent) {
    click.preventDefault();
    console.log('Click Details-Link:', click);
    
  }
  customStyle = {
    color: 'red'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
