import { Component, OnInit } from '@angular/core';
import { Book } from './../../interfaces/book';
import { BookService } from '../../services/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  // selector: 'page-book-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  public books?: Book[];

  constructor(
    private bookService: BookService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    // const books = this.bookService.getBooks();
    // const books = this.bookService.books;
    // console.table( books );

    this.books = this.bookService.books;

    setTimeout(() => {

      const url = 'http://localhost:3000/books';
      this.http.get(url)
        .subscribe(response => {
          // this.books = response as Book[];
          this.bookService.books = response as Book[];
        });

    }, 3000);
  }
}
