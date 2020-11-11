import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})

export class PaginationComponent implements OnInit {

  // pages length
  @Input() pages: number;
  // current page
  page: number;

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParamMap
    .subscribe( params => {
      this.page = Number(params.get('page'));
      this.router.navigate([], { queryParams: { page: this.page }});
    });
  }

  onNext(): void {
    if (this.page < this.pages) {
      this.router.navigate([], { queryParams: { page: ++this.page }});
    }
  }

  onPrev(): void {
    if (this.page > 0) {
      this.router.navigate([], { queryParams: { page: --this.page }});
    }
  }
}
