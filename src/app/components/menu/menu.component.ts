import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
