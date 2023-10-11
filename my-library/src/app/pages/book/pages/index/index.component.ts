import { Component, OnInit } from '@angular/core';
import { Book } from './../../interfaces/book';
import { BookService } from '../../services/book.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    // this.books = this.bookService.books;
    this.bookService.books.subscribe(books => this.books = books)

    setTimeout(() => {

      this.http.get('/books')
        .subscribe(response => {
          this.bookService.books = response as Book[];
        });

    }, 3000);
  }
}
