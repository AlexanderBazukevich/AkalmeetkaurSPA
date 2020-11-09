import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from 'src/app/components/book/book.component';
import { LibraryPageComponent } from './library-page.component';
import { LibraryPageRoutingModule } from './library-page-routing.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

@NgModule({
  declarations: [
    LibraryPageComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    LibraryPageRoutingModule,
    SidebarModule,
    PaginationModule
  ]
})
export class LibraryPageModule { }
