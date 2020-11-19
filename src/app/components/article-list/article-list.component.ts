import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})

export class ArticleListComponent implements OnInit {

  articles: Article[];
  pages: number;

  constructor(private service: ArticleService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe( paramsMap => {
      this.service.getArticles(Number(paramsMap.get('page'))).subscribe( articles => {
        this.articles = articles.data;
        this.pages = Math.floor(articles.count / articles.limit);
      });
    });
  }
}
