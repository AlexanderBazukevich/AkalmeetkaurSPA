import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LogoModule } from '../logo/logo.module';
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
    LogoModule,
    MenuModule,
    RouterModule,
    SocialModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
