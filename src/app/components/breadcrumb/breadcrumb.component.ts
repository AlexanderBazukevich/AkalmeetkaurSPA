import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadCrumb } from 'src/app/interfaces';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: []
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: BreadCrumb[];

  constructor(
      private activeRoute: ActivatedRoute,
      private router: Router
    ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd))
        .subscribe(() => {
          this.breadcrumbs = this.buildBreadcrumbs(this.activeRoute.root).slice(0, length - 1);
        });
  }

  buildBreadcrumbs(route: ActivatedRoute, url: string = '/', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      const label = child.snapshot.data.breadcrumb;

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      if (label !== null || label !== undefined) {
        breadcrumbs.push({label, url});
      }

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
