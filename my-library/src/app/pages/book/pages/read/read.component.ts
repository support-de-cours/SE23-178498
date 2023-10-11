import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  // selector: 'page-book-read',
  templateUrl: './read.component.html'
})
export class ReadComponent implements OnInit {

  public bookId!: number;
  public book?: Book;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private bookService: BookService
  ){
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    console.log( this.bookService.books );
    
    setTimeout(() => {

      this.http
        .get(`/books/${this.bookId}`)
        .subscribe(response => {
          this.book = response as Book;
        })

    }, 3000);
  }
}
