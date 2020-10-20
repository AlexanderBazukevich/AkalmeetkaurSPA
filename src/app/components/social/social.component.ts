import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class SocialComponent implements OnInit {

  @Input() location: string;
  header: boolean;
  aside: boolean;

  constructor() { }

  ngOnInit(): void {
    this.location === 'header' ? this.header = true : this.aside = true;
  }
}
