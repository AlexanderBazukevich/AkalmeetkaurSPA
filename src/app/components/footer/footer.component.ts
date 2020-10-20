import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    :host{
      display: block
    }
  `]
})
export class FooterComponent implements OnInit {

  current = "footer";

  constructor() { }

  ngOnInit(): void {
  }

}
