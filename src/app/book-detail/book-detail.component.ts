import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { BookApiService } from '../book/book-api.service';
import { Book } from '../book/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  
  private readonly baseUrl= 'http://localhost:4730'
  public book!: Book;
  constructor(private route: ActivatedRoute, private bookService: BookApiService) { }
  book$!: Observable<Book>;

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.bookService.getBookByIsbn(params['isbn']).subscribe(book => this.book = book);
    });
    this.book$ = this.route.params.pipe(
      map((params:Params)=>params['isbn']),switchMap((isbn:string)=>this.bookService.getBookByIsbn(isbn)))
    
  }

}
