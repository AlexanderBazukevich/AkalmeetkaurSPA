import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: []
})
export class LibraryPageComponent implements OnInit {

  page: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  setCurrentPage(value: number) {
    this.page = value;
  }
}
