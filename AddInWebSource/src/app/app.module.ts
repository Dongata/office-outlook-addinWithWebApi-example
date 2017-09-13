import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppServices,GlobalConstants } from './app.service';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [AppServices,GlobalConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
