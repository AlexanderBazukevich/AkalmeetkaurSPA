import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.less']
})
export class BreadcrumpComponent implements OnInit {

  public breadcrumps: BreadCrump[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) {
      // this.breadcrumps = this.buildBreadCrumps(this.activatedRoute.root);
    }

  ngOnInit(): void {
    console.log(this.route.url);
  }

  buildBreadCrumps(
    // route: ActivatedRoute,
    // url: string = '',
    // breadcrumbs: BreadCrump[] = []
  ) {

  }

}
