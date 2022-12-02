import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BooksRoutingModule } from './books-routing/books-routing.module';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    BookNewComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule { }
