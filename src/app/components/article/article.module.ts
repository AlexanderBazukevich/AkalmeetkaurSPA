import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../slider/slider.module';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    SliderModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
