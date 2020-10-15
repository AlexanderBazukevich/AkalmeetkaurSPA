import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBioComponent } from './section-bio/section-bio.component';
import { SectionPurchaseComponent } from './section-purchase/section-purchase.component';

@NgModule({
  declarations: [
    SectionBioComponent,
    SectionPurchaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionBioComponent,
    SectionPurchaseComponent
  ]
})
export class SectionModule { }
