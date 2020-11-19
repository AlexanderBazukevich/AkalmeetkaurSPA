import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { EmailComponent } from '../email/email.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PurchaseComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PurchaseComponent]
})
export class PurchaseModule { }
