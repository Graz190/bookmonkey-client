import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() content!:Book;
  @Output() detailsClick = new EventEmitter<Book>();

  handleDetailsClick(click: MouseEvent) {
    click.preventDefault();
    this.detailsClick.emit(this.content);
    
  }
  customStyle = {
    color: 'red'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
