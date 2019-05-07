import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {MovieResolver} from './movies/movie.resolver';
import {ApiService} from './movies/services/api.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieResolver,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
