import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';

const routes:Routes=[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/about'
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'books',
  component:BookComponent
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
