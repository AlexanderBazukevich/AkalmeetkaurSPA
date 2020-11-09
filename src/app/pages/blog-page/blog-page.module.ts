import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { BlogPageComponent } from './blog-page.component';
import { SliderModule } from 'src/app/components/slider/slider.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    BlogPageComponent,
    BlogComponent
  ],
  imports: [
    BlogPageRoutingModule,
    CommonModule,
    SidebarModule,
    SliderModule
  ],
  exports: [
    BlogPageComponent
  ]
})
export class BlogPageModule { }
