import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '../logo/logo.module';
import { AsideComponent } from './aside.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { SocialModule } from '../social/social.module';
import { CopyrightModule } from '../copyright/copyright.module';

@NgModule({
  declarations: [AsideComponent],
  imports: [
    CommonModule,
    CopyrightModule,
    LogoModule,
    MenuModule,
    RouterModule,
    SocialModule
  ],
  exports: [AsideComponent]
})
export class AsideModule { }
