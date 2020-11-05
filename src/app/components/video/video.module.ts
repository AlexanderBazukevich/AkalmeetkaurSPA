import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    YouTubePlayerModule
  ],
  exports: [VideoComponent]
})
export class VideoModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTimes);
  }
}
