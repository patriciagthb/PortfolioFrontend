import { CookieService } from 'ngx-cookie-service';
import { Proyectos } from './../models/proyectos';
import { Habilidades } from './../models/habilidades';
import { Encabezado } from './../models/encabezado';
import { AcercaDe } from './../models/acercade';
import { Educacion } from './../models/educacion';
import { Experiencia } from './../models/experiencia';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url = 'https://morning-temple-53606.herokuapp.com/api';


  constructor(private http: HttpClient, private cookies: CookieService) { }


  //Login---------------------------------------
  //devuelve uno
  login(user: any): Observable<any> {
    return this.http.post(this.url + '/user/login', user);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(this.url + '/user/' + id);
  }

  //token
  setToken(token: string) {
    this.cookies.set('token', token);
  }

  getToken(){
    return this.cookies.get('token');
  }

  deleteToken(){
    this.cookies.delete('token');
  }

  getUserLogged(){
    const token = this.getToken();
    return token;
  }




  //Encabezado-----------------------------------
  //traer lista
  obtenerDatos(): Observable<Encabezado[]> {
    return this.http.get<Encabezado[]>(this.url + '/encabezado/get');
  }

  //traer por id 
  getEncById(id: string): Observable<any> {
    return this.http.get(this.url + '/encabezado/findById/' + id);
  }

  //update 
  updateEnc(id: string, encabezado: Encabezado): Observable<any> {
    return this.http.put<any>(this.url + '/encabezado/update/' + id, encabezado);
  }


  //Experiencia--------------------------------
  //traer lista
  obtenerDatosExp(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + '/experiencia/get');
  }

  //traer por id
  getExpById(id: string): Observable<any> {
    return this.http.get(this.url + '/experiencia/findById/' + id);
  }

  //update 
  updateExperiencia(id: string, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.url + '/experiencia/update/' + id, experiencia);
  }

  //crear
  addExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(this.url + '/experiencia/new', experiencia);
  }

  //borrar
  deleteExperiencia(id: string): Observable<any> {
    return this.http.delete(this.url + '/experiencia/delete/' + id)
  }




  //Educacion-----------------------------------
  //traer lista
  obtenerDatosEduc(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url + '/educacion/get');
  }

  //traer por id 
  getEducById(id: string): Observable<any> {
    return this.http.get(this.url + '/educacion/findById/' + id);
  }

  //update 
  updateEducacion(id: string, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.url + '/educacion/update/' + id, educacion);
  }

  //crear
  addEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.url + '/educacion/new', educacion);
  }

  //borrar
  deleteEducacion(id: string): Observable<any> {
    return this.http.delete(this.url + '/educacion/delete/' + id)
  }



  //AcercaDe Service-----------------------------------------------
  //traer lista
  obtenerDatosA(): Observable<AcercaDe[]> {
    return this.http.get<AcercaDe[]>(this.url + '/acerca/get');
  }

  //traer por id //id:string
  getAdById(id: string): Observable<any> {
    return this.http.get(this.url + '/acerca/findById/' + id);
  }

  //update //id:number
  updateAcerca(id: string, acerca: AcercaDe): Observable<any> {
    return this.http.put<any>(this.url + '/acerca/update/' + id, acerca);
  }



  //Habilidades---------------------------------------
  //traer lista
  obtenerDatosSkills(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.url + '/habilidades/get');
  }


  //traer por id 
  getHabById(id: string): Observable<any> {
    return this.http.get(this.url + '/habilidades/findById/' + id);
  }

  //update 
  updateHab(id: string, habilidades: Habilidades): Observable<any> {
    return this.http.put<any>(this.url + '/habilidades/update/' + id, habilidades);
  }

  //crear
  addHab(habilidades: Habilidades): Observable<any> {
    return this.http.post<any>(this.url + '/habilidades/new', habilidades);
  }

  //borrar
  deleteHab(id: string): Observable<any> {
    return this.http.delete(this.url + '/habilidades/delete/' + id)
  }


  //Proyectos--------------------------------------------
  //traer lista
  obtenerDatosProy(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.url + '/proyectos/get');
  }



}
