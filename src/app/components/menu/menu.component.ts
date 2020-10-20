import { Component, Input, OnInit } from '@angular/core';

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

  @Input() location: string;
  header: boolean;
  aside: boolean;

  constructor() { }

  ngOnInit(): void {
    this.location === 'header' ? this.header = true : this.aside = true;
  }

}
