import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/interfaces';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  @Input() videos: Video[];
  hiddenVideos: boolean[];
  videosId: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    //hide all videos after rendering
    this.hiddenVideos = this.videos.map( () => {return true})
  }

  onClick(index) {
    //adding youtube iframe element
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.videosId[index] = this.videos[index].link;
    
    this.hiddenVideos[index] = this.hiddenVideos[index] === true ? false : true;
  }
}
