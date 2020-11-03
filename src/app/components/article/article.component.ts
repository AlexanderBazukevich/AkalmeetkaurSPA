import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: []
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(private service: ArticleService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.service.getArticle(id);
  }
  
  get articleText(): SafeHtml[] {
    return this.article.content.map( el => {
      return this.sanitizer.bypassSecurityTrustHtml(el.text)
    })
  }
}
