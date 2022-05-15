import { UpdateEncabezadoComponent } from './componentes/update-encabezado/update-encabezado.component';
import { UpdateExperienciaComponent } from './componentes/update-experiencia/update-experiencia.component';
import { UpdateEducacionComponent } from './componentes/update-educacion/update-educacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { UpdateAcercaDeComponent } from './componentes/update-acerca-de/update-acerca-de.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'update-acercade/:id', component : UpdateAcercaDeComponent },
  {path: 'update-educacion/:id', component: UpdateEducacionComponent},
  {path:'update-encabezado/:id', component: UpdateEncabezadoComponent},
  {path: 'update-experiencia/:id', component: UpdateExperienciaComponent},
  {path : '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
