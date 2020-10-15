import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageRoutingModule } from './video-page-routing.module';
import { VideoPageComponent } from './video-page.component';
import { SliderModule } from 'src/app/components/slider/slider.module';
import { VideoModule } from 'src/app/components/video/video.module';

@NgModule({
  declarations: [
    VideoPageComponent
  ],
  imports: [
    CommonModule,
    SliderModule,
    VideoModule,
    VideoPageRoutingModule
  ],
  exports: [VideoPageComponent]
})
export class VideoPageModule { }
