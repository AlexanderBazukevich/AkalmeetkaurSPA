import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces';
import { ArticleService } from 'src/app/services/article/article.service';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: []
})
export class ArticleComponent implements OnInit {

  article: Article;
  currentId: number;
  maxId = this.service.articles.length;

  constructor(private service: ArticleService, private sliderService: SliderService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sliderService.setLastPage(this.maxId);
    const id = Number(this.route.snapshot.params.id);
    this.article = this.service.getArticle(id);
  }

  setCurrentId(value: number) {
    this.currentId = value;
    this.article = this.service.getArticle(this.currentId);
  }
  
  get articleText(): SafeHtml[] {
    return this.article.content.map( el => {
      return this.sanitizer.bypassSecurityTrustHtml(el.text)
    })
  }
}
