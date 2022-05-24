import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miPortfolio:any;
  ulogged:string = '';

  constructor(private datosPortfolio:PortfolioService,
              private router:Router) { }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    } );
    this.ulogged = this.datosPortfolio.getUserLogged();    
  }

  salir():void{
    this.datosPortfolio.deleteToken();
    this.ulogged = '';
    window.location.reload();

  }
  
  loggin():void {
    this.router.navigate(['/login'])
  }

}



