import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { GalleryModule } from '../gallery/gallery.module';

@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    VideosRoutingModule
  ],
  exports: [VideosComponent]
})
export class VideosModule { }
