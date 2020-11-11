import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: []
})
export class BookComponent implements OnInit {

  books: Book[];
  pages: number;

  constructor(private service: BookService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe( paramsMap => {
      this.service.getBooks(Number(paramsMap.get('page')))
        .subscribe( books => {
          this.books = books.data;
          this.pages = Math.floor(books.count / books.limit);
        });
    });
  }
}
