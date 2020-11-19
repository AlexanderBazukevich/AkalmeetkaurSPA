import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CopyrightModule } from '../copyright/copyright.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    CopyrightModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
