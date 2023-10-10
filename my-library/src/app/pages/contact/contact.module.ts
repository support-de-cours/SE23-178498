import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { IndexComponent } from './pages/index/index.component';


const components = [
  IndexComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class ContactModule { }
