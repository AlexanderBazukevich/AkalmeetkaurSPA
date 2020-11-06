import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { ArticleService } from 'src/app/services/article/article.service';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})

export class BlogComponent implements OnInit {

  @Input() currentPage: number;
  articles: Article[];
  maxPage = Math.ceil(this.service.articles.length / this.service.limit);

  constructor(private service: ArticleService, private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.setLastPage(this.maxPage);
    this.articles = this.service.getArticles(this.currentPage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.articles = this.service.getArticles(this.currentPage);
  }
}
