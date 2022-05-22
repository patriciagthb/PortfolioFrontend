import { Habilidades } from './../../models/habilidades';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  nuevaHabilidad: Habilidades = {
    id: '',
    nombre: '',
    porcentaje: ''
  }

  constructor(private datosPortfolio: PortfolioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  crearHab(){
    this.datosPortfolio.addHab(this.nuevaHabilidad).subscribe(data=>{
      this.router.navigate(['']);
    }
    );
  }

}
