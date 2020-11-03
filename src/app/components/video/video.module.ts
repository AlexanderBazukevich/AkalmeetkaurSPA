import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [VideoComponent]
})
export class VideoModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTimes);
  }
}
