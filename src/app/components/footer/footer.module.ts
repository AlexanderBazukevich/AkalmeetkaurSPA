import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '../logo/logo.module';
import { FooterComponent } from './footer.component';
import { CopyrightModule } from '../copyright/copyright.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    CopyrightModule,
    LogoModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
