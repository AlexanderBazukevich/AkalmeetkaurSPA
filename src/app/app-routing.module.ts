import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => 
      import('./pages/home-page/home-page.module')
        .then(m => m.HomePageModule)
  },
  {
    path: 'videos',
    loadChildren: () => 
      import('./pages/video-page/video-page.module')
        .then(m => m.VideoPageModule)
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./pages/library-page/library-page.module')
        .then(m => m.LibraryPageModule)
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog-page/blog-page.module')
        .then(m => m.BlogPageModule)
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
