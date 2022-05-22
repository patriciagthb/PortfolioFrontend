import { LoginComponent } from './componentes/login/login.component';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { UpdateEncabezadoComponent } from './componentes/update-encabezado/update-encabezado.component';
import { UpdateExperienciaComponent } from './componentes/update-experiencia/update-experiencia.component';
import { UpdateEducacionComponent } from './componentes/update-educacion/update-educacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { UpdateAcercaDeComponent } from './componentes/update-acerca-de/update-acerca-de.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillsComponent } from './componentes/add-skills/add-skills.component';
import { UpdateSkillsComponent } from './componentes/update-skills/update-skills.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'update-acercade/:id', component : UpdateAcercaDeComponent },
  {path: 'update-educacion/:id', component: UpdateEducacionComponent},
  {path:'update-encabezado/:id', component: UpdateEncabezadoComponent},
  {path: 'update-experiencia/:id', component: UpdateExperienciaComponent},
  {path: 'add-experiencia', component: AddExperienciaComponent},
  {path: 'add-educacion', component: AddEducacionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-skills', component: AddSkillsComponent},
  {path: 'update-skills/:id', component: UpdateSkillsComponent},  
  {path : '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
