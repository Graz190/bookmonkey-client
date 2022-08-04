import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


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
  path:'books', loadChildren: () => import('./book/book.module').then(m=> m.BookModule) 
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
