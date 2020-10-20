import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { EmailComponent } from '../email/email.component';

@NgModule({
  declarations: [
    PurchaseComponent,
    EmailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PurchaseComponent]
})
export class PurchaseModule { }
