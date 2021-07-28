import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimaisComponent } from './animais/animais.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatCardModule } from "@angular/material/card";
// import {MatGridListModule} from "@angular/material/grid-list";
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimaisComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    // MatCardModule,
    // MatGridListModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
