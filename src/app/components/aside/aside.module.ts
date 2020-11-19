import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { SocialModule } from '../social/social.module';
import { CopyrightModule } from '../copyright/copyright.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AsideComponent],
  imports: [
    CommonModule,
    CopyrightModule,
    FontAwesomeModule,
    MenuModule,
    RouterModule,
    SocialModule
  ],
  exports: [AsideComponent]
})
export class AsideModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTimes);
  }
 }
