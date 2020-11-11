import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/interfaces';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: []
})
export class ArticleComponent implements OnInit {

  article: Article;
  currentId: number;
  prevId: number;
  nextId: number;
  pages: number;

  constructor(
    private service: ArticleService,
    private sanitizer: DomSanitizer,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe( params => {
      this.currentId = Number(params.id);
      this.nextId = this.service.getNextArticleId(this.currentId);
      this.prevId = this.service.getPrevArticleId(this.currentId);
      this.service.getArticle(this.currentId).subscribe( article => {
        this.article = article.data;
        this.pages = article.count;
      });
    });
  }

  get articleText(): SafeHtml[] {
    return this.article.content.map( el => {
      return this.sanitizer.bypassSecurityTrustHtml(el.text);
    });
  }
}
