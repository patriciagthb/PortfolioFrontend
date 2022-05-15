import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/models/acercade';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-update-acerca-de',
  templateUrl: './update-acerca-de.component.html',
  styleUrls: ['./update-acerca-de.component.css']
})
export class UpdateAcercaDeComponent implements OnInit {

  id: string;
  acerca: AcercaDe = { id: '', acercaDe: '' };

  constructor(private datosPortfolio: PortfolioService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    /*
    const id = this.route.snapshot.params['id'];
    this.datosPortfolio.getAdById(id).subscribe(data => {
      this.acerca = data;
    });

  }

  updateAc() {
    const id = this.route.snapshot.params['id'];
    const acerca = { acerca: this.acerca };
    this.datosPortfolio.updateAcerca(id, this.acerca).subscribe(data => {
      this.router.navigate(['/'])
    })

  }
*/


    this.id = this.route.snapshot.params['id'];
    this.datosPortfolio.getAdById(this.id).subscribe(data => {
      this.acerca = data;
    });
  }

  updateAc() {
    this.datosPortfolio.updateAcerca(this.id, this.acerca).subscribe(data => {
      this.router.navigate(['']);
    }
    );
  }
}
