import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookApiService {
  constructor(private http: HttpClient){};

  getAll():Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:4730/books')
  }
}
