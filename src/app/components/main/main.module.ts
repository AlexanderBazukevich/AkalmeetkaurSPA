import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { BlogPageModule } from 'src/app/pages/blog-page/blog-page.module';
import { VideoPageModule } from 'src/app/pages/video-page/video-page.module';
import { LibraryPageModule } from 'src/app/pages/library-page/library-page.module';
import { HomePageModule } from 'src/app/pages/home-page/home-page.module';
import { BreadcrumpComponent } from '../breadcrump/breadcrump.component';

@NgModule({
  declarations: [
    MainComponent,
    BreadcrumpComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BlogPageModule,
    VideoPageModule,
    LibraryPageModule,
    HomePageModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
