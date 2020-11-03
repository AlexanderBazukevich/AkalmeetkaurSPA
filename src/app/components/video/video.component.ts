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

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    //hide all videos after rendering
    this.hiddenVideos = this.videos.map( () => {return true})
  }

  onClick(index) {
    this.hiddenVideos[index] = this.hiddenVideos[index] === true ? false : true;
  }

  get videoLink(): SafeUrl[] {
    return this.videos.map( el => {
      return this.sanitizer.bypassSecurityTrustResourceUrl(el.link)
    })
  }
}
