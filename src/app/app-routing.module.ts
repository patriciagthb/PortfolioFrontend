import { HomeComponent } from './componentes/home/home.component';
import { UpdateAcercaDeComponent } from './componentes/update-acerca-de/update-acerca-de.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'update-acercade/:id', component : UpdateAcercaDeComponent },
  {path : '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
