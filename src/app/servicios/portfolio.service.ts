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

  url = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }

  //Encabezado-----------------------------------

  obtenerDatos(): Observable<Encabezado[]> {
    return this.http.get<Encabezado[]>(this.url + '/encabezado/get/enc');
  }

    //traer por id //id:string
    getEncById(id: string): Observable<any> {
      return this.http.get(this.url + '/encabezado/findById/' + id);
    }

      //update //id:number
  updateEnc(id: string, encabezado: Encabezado): Observable<any> {
    return this.http.put<any>(this.url + '/encabezado/update/' + id, encabezado);
  }




  //Experiencia--------------------------------
  obtenerDatosExp(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + '/experiencia/get/exp');
  }


  //traer por id //id:string
  getExpById(id: string): Observable<any> {
    return this.http.get(this.url + '/experiencia/findById/' + id);
  }

  //update //id:number
  updateExperiencia(id: string, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.url + '/experiencia/update/' + id, experiencia);
  }




  //Educacion-----------------------------------
  //traer lista
  obtenerDatosEduc(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url + '/educacion/get/educ');
  }

  //traer por id //id:string
  getEducById(id: string): Observable<any> {
    return this.http.get(this.url + '/educacion/findById/' + id);
  }

  //update //id:number
  updateEducacion(id: string, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.url + '/educacion/update/' + id, educacion);
  }



  //AcercaDe Service-----------------------------------------------
  //traer lista
  obtenerDatosA(): Observable<AcercaDe[]> {
    return this.http.get<AcercaDe[]>(this.url + '/acerca/get/acerca');
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
  obtenerDatosSkills(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.url + '/habilidades/get/hab');
  }

  //Proyectos--------------------------------------------
  obtenerDatosProy(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.url + '/proyectos/get/proy');
  }



}
