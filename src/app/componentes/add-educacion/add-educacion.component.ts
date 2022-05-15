import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from './../../models/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  nuevaEduc: Educacion = { id:'', 
                           institucion:'',
                           titulo:'',
                           desde:'',
                           hasta:'',
                           ubicacion:'',
                           logo:''}


  constructor(private datosPortfolio: PortfolioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  crearEduc(){
    this.datosPortfolio.addEducacion(this.nuevaEduc).subscribe(data=>{
      this.router.navigate(['']);
    }
    );
  }

}
