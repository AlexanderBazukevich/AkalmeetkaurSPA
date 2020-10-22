import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Section } from 'src/app/interfaces';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: []
})
export class SectionComponent implements OnInit {

  @Input() first: boolean;
  
  section: Section;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.first ? this.section = this.service.getSections()[0] : this.section = this.service.getSections()[1];
  }
}
