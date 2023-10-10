import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  template: `
    <h1 class="page-title">{{ cmpTitle }}</h1>
    <p *ngIf="lead" class="page-lead">{{ lead }}</p>
  `
})
export class TitleComponent {
  @Input() cmpTitle?: string;
  @Input() lead?: string;
}
