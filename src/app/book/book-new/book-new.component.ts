import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  newform!:FormGroup;
  

  constructor(private readonly fb : FormBuilder, private readonly bookApiService :BookApiService, private readonly router:Router) { 

  }

  ngOnInit(): void {
    //const isInEditMode = url.include('Edit')
    //const isbn = //get Paramsoberval
    //const book = this.bookApiService.getBookByIsbn(isbn)
    /*if(isInEditMode){
      this.newform = this.fb.group({
        title: ['',[Validators.required]],
        isbn:['',[Validators.required, Validators.minLength(11)] ],
        //<small *ngIf="new"
        author:['',Validators.required],
        abstract:['',Validators.required]
      }
      )
    }*/
    //<small *ngIf="newForm.get('title')?dirty&& newForm.get('isbn')?"></small>
    this.newform = this.fb.group({
      title: ['',[Validators.required]],
      isbn:['',[Validators.required, Validators.minLength(11)] ],
      //<small *ngIf="new"
      author:['',Validators.required],
      abstract:['',Validators.required]
    }
    )
  }
  submit(){
    console.log(this.newform)
    this.bookApiService.create(this.newform.value).pipe(take(1)).subscribe((book:Book)=>this.router.navigate(['/books',book.isbn]));
  }

}
