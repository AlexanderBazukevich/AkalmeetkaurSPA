import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {

  title: string;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getPageTitle().subscribe( value => {
      this.title = value;
    });
  }
}
