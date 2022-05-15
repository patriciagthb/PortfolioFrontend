import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from './../../models/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-educacion',
  templateUrl: './update-educacion.component.html',
  styleUrls: ['./update-educacion.component.css']
})
export class UpdateEducacionComponent implements OnInit {

  id: string;
  educacion: Educacion = { id:'', 
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
    this.id = this.route.snapshot.params['id'];
    this.datosPortfolio.getEducById(this.id).subscribe(data => {
      this.educacion = data;
    });
  }

  updateEduc() {
    this.datosPortfolio.updateEducacion(this.id, this.educacion).subscribe(data => {
      this.router.navigate(['']);
    }
    );
  }
}