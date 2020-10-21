import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {

  showOverlay: boolean;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAsideVisibility().subscribe( value => this.showOverlay = value)
    this.service.setAsideVisibility(!this.showOverlay);
  }
}
