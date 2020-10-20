import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: []
})
export class CopyrightComponent implements OnInit {

  @Input() location: string;
  footer: boolean;
  aside: boolean;

  constructor() { }

  ngOnInit(): void {
    this.location === 'footer' ? this.footer = true : this.aside = true;
  }
}
