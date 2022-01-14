import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisComponent } from '../animais/animais.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from "../login/login.component";
import { ComoAjudarComponent } from '../como-ajudar/como-ajudar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'animais',
    component: AnimaisComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ajudar',
    component: ComoAjudarComponent,
  }
];

@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }
