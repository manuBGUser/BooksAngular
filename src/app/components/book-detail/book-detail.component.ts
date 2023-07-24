import { Component, OnInit } from '@angular/core';
import packageInfo  from '../../../../books.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit{
  book;
  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.loadBook();
  }

  loadBook() {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.book = packageInfo.books.find(b => b.id == bookId)
  }
}
