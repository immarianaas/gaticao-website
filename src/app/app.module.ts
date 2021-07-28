import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimaisComponent } from './animais/animais.component';

import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AnimaisComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddAnimalComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
