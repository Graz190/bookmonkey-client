import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BooksRoutingModule } from './books-routing/books-routing.module';



@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule { }
