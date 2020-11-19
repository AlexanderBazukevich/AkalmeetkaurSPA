import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ArticleListComponent } from 'src/app/components/article-list/article-list.component';

@NgModule({
  declarations: [
    BlogPageComponent,
    ArticleListComponent
  ],
  imports: [
    BlogPageRoutingModule,
    CommonModule,
    SidebarModule,
    PaginationModule
  ],
  exports: [
    BlogPageComponent
  ]
})
export class BlogPageModule { }
