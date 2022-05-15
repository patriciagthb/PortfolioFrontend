import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acerca: any;


  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosA().subscribe(data => {
      this.acerca = data;
    });
  }



}
