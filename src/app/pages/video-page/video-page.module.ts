import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageRoutingModule } from './video-page-routing.module';
import { VideoPageComponent } from './video-page.component';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { VideoModule } from 'src/app/components/video/video.module';

@NgModule({
  declarations: [
    VideoPageComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    VideoModule,
    VideoPageRoutingModule
  ],
  exports: [VideoPageComponent]
})
export class VideoPageModule { }
