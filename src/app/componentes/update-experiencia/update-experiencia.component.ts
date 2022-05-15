import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from './../../models/experiencia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-experiencia',
  templateUrl: './update-experiencia.component.html',
  styleUrls: ['./update-experiencia.component.css']
})
export class UpdateExperienciaComponent implements OnInit {

  id:string;
  experiencia: Experiencia = {id:'',
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
    this.id = this.route.snapshot.params['id'];
    this.datosPortfolio.getExpById(this.id).subscribe(data => {
      this.experiencia = data;
    });
  }

  updateExp() {
    this.datosPortfolio.updateExperiencia(this.id, this.experiencia).subscribe(data => {
      this.router.navigate(['']);
    }
    );
  }
}
