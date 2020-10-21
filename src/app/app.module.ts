import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainModule } from './components/main/main.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { AsideModule } from './components/aside/aside.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AsideModule,
    CommonModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    MainModule,
    RoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
