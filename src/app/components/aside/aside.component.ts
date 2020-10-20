import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: []
})
export class AsideComponent implements OnInit {

  current = "aside";

  constructor() { }

  ngOnInit(): void {
  }

}
