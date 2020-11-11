import { Component, OnInit } from '@angular/core';
import { AsideService } from 'src/app/services/aside/aside.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: []
})
export class BurgerComponent implements OnInit {

  asideVisible: boolean;

  constructor(private service: AsideService) { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    event.preventDefault();
    this.service.getAsideVisibility().subscribe( value => this.asideVisible = value);
    this.service.setAsideVisibility(!this.asideVisible);
  }
}
