import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { SocialModule } from '../social/social.module';
import { BurgerModule } from '../burger/burger.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BurgerModule,
    CommonModule,
    MenuModule,
    RouterModule,
    SocialModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
