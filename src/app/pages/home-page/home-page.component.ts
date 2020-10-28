import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Section } from 'src/app/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: []
})
export class HomePageComponent implements OnInit {

  current: string = 'homepage';

  constructor(private service: DataService) { }

  sections: Section[];

  ngOnInit(): void {
    this.sections = this.service.getSections()
  }
}
