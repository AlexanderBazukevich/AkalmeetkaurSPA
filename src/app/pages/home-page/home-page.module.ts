import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CoverComponent } from 'src/app/components/cover/cover.component';
import { SectionModule } from 'src/app/components/section/section.module';
import { CausesComponent } from 'src/app/components/causes/causes.component';
import { VideoModule } from 'src/app/components/video/video.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CoverComponent,
    CausesComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SectionModule,
    VideoModule
  ]
})
export class HomePageModule { }
