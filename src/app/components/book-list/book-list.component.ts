import { Component } from '@angular/core';
import packageInfo  from '../../../../books.json';
// import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent {
  books = packageInfo.books;
  text;
  selectedOrder;

  filterByText(){
    if(this.text == "")
        this.books = packageInfo.books
    else
        this.books = packageInfo.books.filter(b => b.title.includes(this.text) || b.description.includes(this.text))
  }

  clean(){
    this.books = packageInfo.books
    this.text = ""
  }

  onChange(value: any) {
    this.selectedOrder = value.target.value;
    this.books.sort((a, b) => a[this.selectedOrder].localeCompare(b[this.selectedOrder]))
}
}
