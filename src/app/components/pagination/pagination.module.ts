import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLongArrowAltRight, faLongArrowAltLeft)
  }
}
