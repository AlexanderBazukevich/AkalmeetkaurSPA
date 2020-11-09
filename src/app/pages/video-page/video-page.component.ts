import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/interfaces';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: []
})

export class VideoPageComponent implements OnInit {

  videos: Video[];
  pages: number;

  constructor(private service: VideoService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe( paramsMap => {
      const response = this.service.getVideos({ filter: {
        page: Number(paramsMap.get('page'))
      }});
      this.videos = response.data;
      this.pages = Math.floor(response.count / response.limit);
    })
  }
}
