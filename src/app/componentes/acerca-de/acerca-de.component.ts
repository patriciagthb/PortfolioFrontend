import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acerca: any;
  ulogged:string = '';


  constructor(private datosPortfolio: PortfolioService,
    private router: Router) { }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosA().subscribe(data => {
      this.acerca = data;
    });
      this.ulogged = this.datosPortfolio.getUserLogged();
  }
}
    /*salir():void{
    this.datosPortfolio.deleteToken();
    this.ulogged = '';
  }

  loggin():void {
    this.router.navigate(['/login'])
  }*/



