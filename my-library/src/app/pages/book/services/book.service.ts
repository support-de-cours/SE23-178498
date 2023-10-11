import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private _books: Book[] = [];

  // _books est de type BehaviorSubject,
  // BehaviorSubject est comme un conteneur qui va contenir un tableau de Book
  // BehaviorSubject est un émeteur qui diffuse un "etat" du tableau de Book
  private _books:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  set books(books: Book[])
  {
    // this._books = books;
    this._books.next(books);
  }

  get books (): BehaviorSubject<Book[]>
  {
    return this._books;
  }

  constructor() { }


  
}
