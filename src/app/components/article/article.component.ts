import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  prevId = 2;
  nextId = 2;
  pages: number;

  constructor(private service: ArticleService, private sanitizer: DomSanitizer, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentId = Number(this.activeRoute.snapshot.params.id);
    // this.nextId = this.service.getNextAricleId(this.currentId);
    // this.prevId = this.service.getPrevAricleId(this.currentId);
    this.article = this.service.getArticle(this.currentId).data;
    this.pages = this.service.getArticle(this.currentId).count;
  }

  // onNext() {
  //   // const id = this.service.getNextAricleId(this.currentId);
  //   this.navigateTo(2)
  // }

  // onPrev() {
  //   if (this.currentId > 0) {
  //     this.currentId--
  //   }
  //   this.navigateTo(this.currentId)
  // }

  // navigateTo(id: number) {
  //   this.article = this.service.getArticle(id).data;
  //   this.router.navigate(['/article-list/article', id]);
  // }

  get articleText(): SafeHtml[] {
    return this.article.content.map( el => {
      return this.sanitizer.bypassSecurityTrustHtml(el.text)
    })
  }
}
