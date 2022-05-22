import { Habilidades } from './../../models/habilidades';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-skills',
  templateUrl: './update-skills.component.html',
  styleUrls: ['./update-skills.component.css']
})
export class UpdateSkillsComponent implements OnInit {

  id: string;
  skill: Habilidades = {id: '',
                        nombre: '',
                        porcentaje: ''}

  constructor(private datosPortfolio: PortfolioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.datosPortfolio.getHabById(this.id).subscribe(data => {
      this.skill = data;
    });
  }

  updateHab() {
    this.datosPortfolio.updateHab(this.id, this.skill).subscribe(data => {
      this.router.navigate(['']);
    }
    );
  }


}
