import { Component, Input } from '@angular/core';

@Component({
  selector: 'say-hello',
  template: `<div>Hello {{ name }}</div><br>`
})
export class SayHello {
  @Input() name?: string;
}
