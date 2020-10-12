import { NgModule } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    GalleryComponent,
    VideoComponent
  ],
  imports: [
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
