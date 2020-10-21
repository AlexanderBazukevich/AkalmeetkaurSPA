import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SliderComponent]
})
export class SliderModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLongArrowAltRight, faLongArrowAltLeft)
  }
}
