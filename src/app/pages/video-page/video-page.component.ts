import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interfaces';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: []
})
export class VideoPageComponent implements OnInit {

  videos: Video[] = [];

  constructor(private service: VideoService) { }

  ngOnInit(): void {
    this.videos = this.service.getVideos();
  }
}
