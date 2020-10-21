import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BurgerComponent } from './burger.component';

@NgModule({
  declarations: [BurgerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [BurgerComponent]
})
export class BurgerModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faBars);
  }
}
