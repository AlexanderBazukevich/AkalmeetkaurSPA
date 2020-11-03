import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: []
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }
}
