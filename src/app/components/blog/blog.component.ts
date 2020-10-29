import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})
export class BlogComponent implements OnInit {

  articles: Article[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.articles = this.service.getArticles();
  }
}
