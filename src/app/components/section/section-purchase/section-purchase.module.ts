import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseModule } from '../../purchase/purchase.module';
import { SectionPurchaseComponent } from './section-purchase.component';

@NgModule({
  declarations: [SectionPurchaseComponent],
  imports: [
    CommonModule,
    PurchaseModule
  ],
  exports: [SectionPurchaseComponent]
})
export class SectionPurchaseModule { }
