import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})
export class BlogComponent implements OnInit {

  articles: Article[];

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.service.getArticles();
  }
}
