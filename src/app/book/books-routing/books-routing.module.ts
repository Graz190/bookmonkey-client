import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from 'src/app/book-detail/book-detail.component';
import { BookComponent } from '../book.component';

const BOOK_ROUTES: Routes = [
  {
    path:'',
    component: BookComponent
  },
  {
  path:':isbn',
  component: BookDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(BOOK_ROUTES),
  ]
})
export class BooksRoutingModule { }
