import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';  // <<<< import it here
// import {NgPipesModule} from 'ngx-pipes';
// import { Pipe } from "angular/core";


@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // NgPipesModule,
    // Pipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
