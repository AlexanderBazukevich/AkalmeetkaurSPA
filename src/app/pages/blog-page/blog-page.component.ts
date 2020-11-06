import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: []
})
export class BlogPageComponent implements OnInit {

  page: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentPage(value: number) {
    this.page = value;
  }
}
