import { Component, OnInit } from '@angular/core';
import { Cause } from 'src/app/interfaces';
import { CausesService } from 'src/app/services/causes/causes.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: []
})
export class CausesComponent implements OnInit {

  causes: Cause[];

  constructor(private service: CausesService) { }

  ngOnInit(): void {
    this.causes = this.service.getCauses();
  }
}
