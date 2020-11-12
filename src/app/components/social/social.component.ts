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

  constructor() { }

  ngOnInit(): void {}
}
