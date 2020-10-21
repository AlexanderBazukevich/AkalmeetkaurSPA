import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: []
})
export class HomePageComponent implements OnInit {

  current: string = 'homepage';

  constructor() { }

  ngOnInit(): void {
  }

}
