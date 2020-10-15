import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: []
})
export class CausesComponent implements OnInit {

  causes;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.causes = this.service.getCauses();
  }
}
