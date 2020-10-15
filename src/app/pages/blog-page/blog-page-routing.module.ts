import { NgModule } from '@angular/core';
import { BlogPageComponent } from './blog-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent
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
