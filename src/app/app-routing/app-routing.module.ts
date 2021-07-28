import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaisComponent } from '../animais/animais.component';
import { HomeComponent } from '../home/home.component';

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