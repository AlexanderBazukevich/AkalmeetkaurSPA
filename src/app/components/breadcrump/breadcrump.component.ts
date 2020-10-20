import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadCrump } from 'src/app/interfaces';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: []
})
export class BreadcrumpComponent implements OnInit {

  public breadcrumps: BreadCrump[];

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
    url.split('/').splice(1).forEach( (el,i) => {
      if (i === 0) {
        this.breadcrumps.push({
          label: el,
          url: el
        });
      } else {
        this.breadcrumps.push({
          label: el,
          url: this.breadcrumps[i - 1].url + '/' + el
        });
      };
    });
  }
}
