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

  constructor(private datosPortfolio: PortfolioService) { }

  barrs(numero:number){
    return numero+"%";
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosSkills().subscribe(data => {
      this.skills = data;
    });

    
  }

}
