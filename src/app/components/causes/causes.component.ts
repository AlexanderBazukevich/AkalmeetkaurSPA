import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Cause } from 'src/app/interfaces';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: []
})
export class CausesComponent implements OnInit {

  causes: Cause[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.causes = this.service.getCauses();
  }
}
