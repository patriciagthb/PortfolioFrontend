import { Component, OnInit } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
 
  skills:any;
  ulogged:string = '';

  constructor(private datosPortfolio: PortfolioService) { }

  barrs(numero:number){
    return numero+"%";
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosSkills().subscribe(data => {
      this.skills = data;
    });
    
    this.ulogged = this.datosPortfolio.getUserLogged();
    
  }

  deleteHab(id:string){
    if(confirm('¿Está seguro de que desea eliminar el registro?')){
    this.datosPortfolio.deleteHab(id).subscribe(data =>{
      this.ngOnInit()
    })};
  }

}
