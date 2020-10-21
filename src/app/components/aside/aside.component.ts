import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: []
})
export class AsideComponent implements OnInit {

  current = "aside";
  asideVisible: boolean;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.service.getAsideVisibility().subscribe( value => {
      this.asideVisible = value;
    })
  }
  
  onClick(event) {
    event.preventDefault();
    this.service.getAsideVisibility().subscribe( value => this.asideVisible = value)
    this.service.setAsideVisibility(!this.asideVisible);
  }
}
