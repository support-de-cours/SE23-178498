import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomepageRoutingModule } from './homepage-routing.module';

const components = [
  IndexComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class HomepageModule { }
