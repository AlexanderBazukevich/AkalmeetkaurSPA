import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Blog } from 'src/app/interfaces';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})
export class BlogComponent implements OnInit {

  blogs: Blog[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.blogs = this.service.getBlogs();
  }
}
