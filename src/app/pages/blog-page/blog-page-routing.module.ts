import { NgModule } from '@angular/core';
import { BlogPageComponent } from './blog-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent
  },
  {
    path: 'article',
    loadChildren: () =>
      import('src/app/components/article/article.module')
        .then(m => m.ArticleModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogPageRoutingModule { }
