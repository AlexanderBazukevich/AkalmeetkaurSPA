import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing.module';
import { HeaderModule } from './components/header/header.module';
import { ArticleComponent } from './components/article/article.component';
import { AsideComponent } from './components/aside/aside.component';
import { BookComponent } from './components/book/book.component';
import { BurgerComponent } from './components/burger/burger.component';
import { ButtonComponent } from './components/button/button.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CoverComponent } from './components/cover/cover.component';
import { EmailComponent } from './components/email/email.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SectionComponent } from './components/section/section.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { TopicComponent } from './components/topic/topic.component';
import { MainModule } from './components/main/main.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AsideComponent,
    BookComponent,
    BurgerComponent,
    ButtonComponent,
    CopyrightComponent,
    CoverComponent,
    EmailComponent,
    FooterComponent,
    PurchaseComponent,
    SectionComponent,
    SidebarComponent,
    SliderComponent,
    TopicComponent
  ],
  imports: [
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
