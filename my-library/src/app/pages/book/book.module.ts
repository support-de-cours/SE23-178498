import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookRoutingModule } from './book-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  IndexComponent,
  CreateComponent,
  ReadComponent,
  UpdateComponent,
  DeleteComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class BookModule { }
