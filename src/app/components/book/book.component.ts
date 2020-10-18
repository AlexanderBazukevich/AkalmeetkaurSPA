import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Book } from 'src/app/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: []
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }

}
