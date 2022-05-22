import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  educacionList: any;
  experienciaList: any;
  ulogged:string = '';
  
  constructor(private datosPortfolio: PortfolioService) { }

  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEduc().subscribe(data => {
      this.educacionList = data;
    });

    this.datosPortfolio.obtenerDatosExp().subscribe(data => {
      this.experienciaList = data;
    });

    this.ulogged = this.datosPortfolio.getUserLogged();

  }

  deleteEduc(id:string){
    if(confirm('¿Está seguro de que desea eliminar el registro?')){
    this.datosPortfolio.deleteEducacion(id).subscribe(data =>{
      this.ngOnInit()
    })};
  }



  deleteExp(id:string){
    if(confirm('¿Está seguro de que desea eliminar el registro?')){
    this.datosPortfolio.deleteExperiencia(id).subscribe(data =>{
      this.ngOnInit()
    })};
  }

}
