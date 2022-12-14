import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from 'src/app/book-detail/book-detail.component';
import { BookNewComponent } from '../book-new/book-new.component';
import { BookComponent } from '../book.component';
import { ConfirmCandeactivateGuard } from '../confirm-candeactivate.guard';

const BOOK_ROUTES: Routes = [
  {
    path:'',
    component: BookComponent,
    
  },
  {
    path:'new',
    component:BookNewComponent
  },
  {
  path:':isbn',
  component: BookDetailComponent,
  canDeactivate: [ConfirmCandeactivateGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(BOOK_ROUTES),
  ],exports:[RouterModule]
})
export class BooksRoutingModule { }
