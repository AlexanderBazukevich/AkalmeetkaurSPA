import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: []
})
export class BreadcrumpComponent implements OnInit {

  public breadcrumps: string[];

  constructor(
      public router: Router
    ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd))
        .subscribe((event: RouterEvent) => {
          this.buildBreadCrumps(event.url);
        });
  }

  buildBreadCrumps(url: string) {
    this.breadcrumps = [];
    url.split('/').splice(1).forEach( el => {
      this.breadcrumps.push(el)
    });
  }

}
