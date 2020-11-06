import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Video } from 'src/app/interfaces';
import { SliderService } from 'src/app/services/slider/slider.service';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: []
})

export class VideoPageComponent implements OnInit {

  page: number = 0;
  videos: Video[] = [];
  maxPage = Math.ceil(this.service.videos.length / this.service.limit);

  constructor(private service: VideoService, private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.setLastPage(this.maxPage);
    this.videos = this.service.getVideos({filter: {
      page: String(this.page)
    }});
  }

  setCurrentPage(value: number) {
    this.page = value;
    this.videos = this.service.getVideos({filter: {
      page: String(this.page)
    }});
  }
}
