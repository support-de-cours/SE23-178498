import { Component } from '@angular/core';
import { Book } from './../../interfaces/book';

@Component({
  // selector: 'page-book-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  public books: Book[] = [
    {
      title: "My awesome book",
      description: "An awesome book needs no description !",
      price: 99.99,
      id: 42,
    },
    {
      title: "A super book",
      description: "An awesome book needs no description !",
      price: 99.99,
      id: 123,
    },
    {
      title: "The book of doom",
      description: "An awesome book needs no description !",
      price: 99.99,
      id: 456,
    },
  ];
}




// "My awesome book",
// "A super book",
// "The book of doom"