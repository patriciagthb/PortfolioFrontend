import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { UpdateAcercaDeComponent } from './componentes/update-acerca-de/update-acerca-de.component';
import { HomeComponent } from './componentes/home/home.component';
import { UpdateExperienciaComponent } from './componentes/update-experiencia/update-experiencia.component';
import { UpdateEducacionComponent } from './componentes/update-educacion/update-educacion.component';
import { UpdateEncabezadoComponent } from './componentes/update-encabezado/update-encabezado.component';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { LoginComponent } from './componentes/login/login.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    UpdateAcercaDeComponent,
    HomeComponent,
    UpdateExperienciaComponent,
    UpdateEducacionComponent,
    UpdateEncabezadoComponent,
    AddEducacionComponent,
    AddExperienciaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
