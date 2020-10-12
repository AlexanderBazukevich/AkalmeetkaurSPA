import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => 
      import('./components/home/home.module')
        .then(m => m.HomeModule)
  },
  {
    path: 'videos',
    loadChildren: () => 
      import('./components/videos/videos.module')
        .then(m => m.VideosModule)
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./components/library/library.module')
        .then(m => m.LibraryModule)
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./components/blog/blog.module')
        .then(m => m.BlogModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
