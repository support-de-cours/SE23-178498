import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Interpolation unidirectionnelle : dataBinding
  public message: string = 'Hello world';

  // Interpolation unidirectionnelle : propertyBinding
  public image_source: string = 'https://picsum.photos/200';


  // Interpolation unidirectionnelle : eventBinding
  changeHello()
  {
    this.message = 'Hello There';
    this.image_source = 'https://picsum.photos/201';
  }


  // Interpolation birectionnelle : twoWayBinding
  // Ajouter : imports: [ FormsModule ], dans le app.module.ts 
  username = "Bobby";
  
}
