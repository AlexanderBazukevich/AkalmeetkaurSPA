import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/interfaces';
import { BookService } from 'src/app/services/book/book.service';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: []
})
export class BookComponent implements OnInit {

  @Input() currentPage: number;
  books: Book[];
  maxPage = Math.ceil(this.service.books.length / this.service.limit);

  constructor(private service: BookService,  private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.setLastPage(this.maxPage);
    this.books = this.service.getBooks(this.currentPage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.books = this.service.getBooks(this.currentPage);
  }
}
