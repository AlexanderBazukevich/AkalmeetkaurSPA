import { Component, OnInit } from '@angular/core';
import { AsideService } from 'src/app/services/aside/aside.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {

  showOverlay: boolean;

  constructor(private service: AsideService) { }

  ngOnInit(): void {
    this.service.getAsideVisibility().subscribe( value => this.showOverlay = value);
    this.service.setAsideVisibility(!this.showOverlay);
  }
}
