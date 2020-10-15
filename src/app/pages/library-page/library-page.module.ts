import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryPageComponent } from './library-page.component';
import { LibraryPageRoutingModule } from './library-page-routing.module';
import { SliderModule } from 'src/app/components/slider/slider.module';
import { BookComponent } from 'src/app/components/book/book.component';

@NgModule({
  declarations: [
    LibraryPageComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    SliderModule,
    LibraryPageRoutingModule
  ]
})
export class LibraryPageModule { }
