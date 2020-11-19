import { Component, OnInit } from '@angular/core';
import { Section, Video } from 'src/app/interfaces';
import { SectionService } from 'src/app/services/section/section.service';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: []
})
export class HomePageComponent implements OnInit {

  videos: Video[];
  sections: Section[];

  constructor(private videoService: VideoService, private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sectionService.getSections()
      .subscribe( sections => {
        this.sections = sections;
      });
    this.videoService.getVideos({filter: {
      promo: true
    }})
      .subscribe( video => {
        this.videos = video.data;
      });
  }
}
