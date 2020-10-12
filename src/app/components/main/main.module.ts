import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { VideosModule } from '../videos/videos.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    RouterModule,
    VideosModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
