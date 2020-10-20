import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBioComponent } from './section-bio/section-bio.component';

@NgModule({
  declarations: [
    SectionBioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionBioComponent
  ]
})
export class SectionModule { }
