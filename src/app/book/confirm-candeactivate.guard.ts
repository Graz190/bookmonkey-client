import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';


@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard implements CanDeactivate<BookDetailComponent> {
  canDeactivate(
    component:BookDetailComponent,
    route: ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot,
    state: RouterStateSnapshot):boolean {
    return confirm('Are you sure?');
  }
  
}
