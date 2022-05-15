import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from './../../models/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {

  nuevaExp: Experiencia = {id:'',
                          empresa:'',
                          puesto:'',
                          desde:'',
                          hasta:'',
                          ubicacion:'',
                          logo:''}

  constructor(private datosPortfolio: PortfolioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

  }

  crearExp(){
    this.datosPortfolio.addExperiencia(this.nuevaExp).subscribe(data=>{
      this.router.navigate(['']);
    }
    );
  }

}
