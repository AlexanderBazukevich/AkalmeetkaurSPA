import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
