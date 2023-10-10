import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public item: string = "";
  public items?: string[] = [];

  add ()
  {
    this.items?.push(this.item);
    this.item = "";
  }
}
