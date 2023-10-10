import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
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
    AboutRoutingModule
  ],
  exports: [
    ...components
  ],
})
export class AboutModule { }
