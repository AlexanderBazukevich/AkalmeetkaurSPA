import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: []
})
export class VideoPageComponent implements OnInit {

  current: string = 'videospage';

  constructor() { }

  ngOnInit(): void {
  }

}
