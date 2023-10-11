import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: Book[] = [];

  // setBooks(books: Book[])
  // {
  //   this.books = books;
  // }
  // getBooks(): Book[]
  // {
  //   return this.books;
  // }

  set books(books: Book[])
  {
    this._books = books;
  }
  get books (): Book[]
  {
    return this._books;
  }

  constructor() { }
}
