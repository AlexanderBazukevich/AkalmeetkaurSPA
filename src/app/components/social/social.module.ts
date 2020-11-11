import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [SocialComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SocialComponent]
})
export class SocialModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faFacebookF, faYoutube, faInstagram);
  }
}
