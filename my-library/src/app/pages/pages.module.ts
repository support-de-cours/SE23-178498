import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { BookModule } from './book/book.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageModule,
    AboutModule,
    ContactModule,
    BookModule
  ]
})
export class PagesModule { }
