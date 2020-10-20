import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LogoModule } from '../logo/logo.module';
import { BurgerComponent } from '../burger/burger.component';
import { MenuModule } from '../menu/menu.module';
import { SocialModule } from '../social/social.module';

@NgModule({
  declarations: [
    BurgerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    MenuModule,
    RouterModule,
    SocialModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
