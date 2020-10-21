import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: []
})
export class BurgerComponent implements OnInit {

  asideVisible: boolean;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  onClick(event) {
    event.preventDefault();
    this.service.getAsideVisibility().subscribe( value => this.asideVisible = value)
    this.service.setAsideVisibility(!this.asideVisible);
  }
}
