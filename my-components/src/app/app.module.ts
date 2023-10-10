import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SayHello } from './say-hello/say-hello.component';
import { TitleComponent } from './title/title.component';
import { MonModuleModule } from './mon-module/mon-module.module';

@NgModule({
  declarations: [
    AppComponent,
    SayHello,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    MonModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
