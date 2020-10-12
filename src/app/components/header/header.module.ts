import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { HeaderComponent } from './header.component';
import { MenuComponent } from '../menu/menu.component';
import { SocialComponent } from '../social/social.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SocialComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }
