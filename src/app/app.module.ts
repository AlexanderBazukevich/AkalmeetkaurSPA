import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './app-routing.module';

import { MainModule } from './components/main/main.module';
import { HeaderModule } from './components/header/header.module';

import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { BurgerComponent } from './components/burger/burger.component';
import { ButtonComponent } from './components/button/button.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { EmailComponent } from './components/email/email.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    BurgerComponent,
    ButtonComponent,
    CopyrightComponent,
    EmailComponent,
    FooterComponent,
    PurchaseComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HeaderModule,
    MainModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
