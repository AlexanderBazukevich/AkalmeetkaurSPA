import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Video } from 'src/app/interfaces';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  videos: Video[];
  homepageVideos: Video[];
  @Input() location: string;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.videos = this.service.getVideos();
    this.homepageVideos = this.videos.filter( (video) => video.homepage);
  }
}
