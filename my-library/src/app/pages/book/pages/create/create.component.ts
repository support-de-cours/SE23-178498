import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'page-book-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  // Creation du FormGroup
  public bookForm = new FormGroup({

    // Champ "title" avec la contrainte "required"
    title: new FormControl(null, [
      Validators.required
    ]),

    // Champ "description" facultation
    description: new FormControl(),

    // Champ "price" avec la contrainte "required"
    price: new FormControl(null, [
      Validators.required
    ]),

  });

  sendNewBook(): void 
  {
    this.http
      .post('/books', this.bookForm.value)
      .subscribe(response => {
        const _response = response as Book;

        alert("Livre enregistré");
        this.router.navigate(['book', _response.id ])

        console.log(response);
      })
  }

  back(): void 
  {
    history.back();
    // history.go(-1);
  }
}
