import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:any;

    constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProy().subscribe(data => {
      this.proyectos = data;
    });
  }

}
