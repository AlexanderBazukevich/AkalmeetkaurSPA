import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    // hide all videos after rendering
    this.hiddenVideos = this.videos.map( () => {return true})
  }

  get videoCover(): SafeUrl[] {
    return this.videos.map( el => {
      return this.sanitizer.bypassSecurityTrustResourceUrl(el.cover)
    })
  }

  onClick(index) {
    // incert youtube iframe element
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // incert video ID 
    this.videosId[index] = this.videos[index].link;

    // show/hide video-player onclick event
    this.hiddenVideos[index] = this.hiddenVideos[index] === true ? false : true;
  }
}
