import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page-book-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  public bookId!: number;
  public book: any;
  public bookForm: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void 
  {
    // Recupération des données du livre
    this.http
      .get(`books/${this.bookId}`)
      .subscribe(response => {
        this.book = response;
        this.formBuilder(); // Creation du formulaire quand on recoit les données du livre
      })
  }

  // Soumission du formulaire
  updateBook()
  {
    if (this.bookForm.valid)
    {
      this.http
        .put(`books/${this.bookId}`, this.bookForm.value)
        .subscribe((response: any) => {
          this.router.navigate(['livre', response.id]);
        })
    }
  }

  // Construction du formulaire, avec injection des valeur par defaut dans les champs
  private formBuilder()
  {
    this.bookForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null),
      price: new FormControl(null, [
        Validators.required
      ])
    });

    this.bookForm.patchValue(this.book);
  }
}
