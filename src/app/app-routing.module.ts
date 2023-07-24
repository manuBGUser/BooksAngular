import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'details/:id', component:BookDetailComponent},
  {path: 'list', component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
