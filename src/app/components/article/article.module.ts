import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    ArticleRoutingModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class ArticleModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLongArrowAltRight, faLongArrowAltLeft);
  }
}
