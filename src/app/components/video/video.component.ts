import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  videos;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.videos = this.service.getVideos();
  }
}
