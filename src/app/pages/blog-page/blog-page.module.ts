import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { BlogPageComponent } from './blog-page.component';
import { SliderModule } from 'src/app/components/slider/slider.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BlogPageComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SliderModule,
    BlogPageRoutingModule
  ],
  exports: [
    BlogPageComponent
  ]
})
export class BlogPageModule { }
