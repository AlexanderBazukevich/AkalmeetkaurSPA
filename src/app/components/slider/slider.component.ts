import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})

export class SliderComponent implements OnInit {

  @Output() newPage = new EventEmitter<number>();
  page: number = 0;
  limit: number;

  constructor(private service: SliderService) { }

  ngOnInit(): void {
    this.limit = this.service.getLastPage() - 1;
  }

  onClick(side: boolean) {
    (side && this.page < this.limit) ? this.page++ : (!side && this.page > 0) ? this.page-- : this.page = this.page;
    this.newPage.emit(this.page);
  }
}
