import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})

export class BookApiService {
  constructor(private http: HttpClient){};
  private readonly baseUrl= 'http://localhost:4730'

  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books`)
  }
  getBookByIsbn(isbn: string){
    return this.http.get<Book>(`${this.baseUrl}/books/${isbn}`)
  }
}
