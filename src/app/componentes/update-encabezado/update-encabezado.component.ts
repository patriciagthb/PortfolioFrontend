import { Encabezado } from './../../models/encabezado';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-encabezado',
  templateUrl: './update-encabezado.component.html',
  styleUrls: ['./update-encabezado.component.css']
})
export class UpdateEncabezadoComponent implements OnInit {

  id:string;
  encabezado: Encabezado = {id:'',
                            nombre:'',
                            fotoperfil:'',
                            titulo:'',
                            ubicacion:''}


  constructor(private datosPortfolio: PortfolioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.datosPortfolio.getEncById(this.id).subscribe(data => {
      this.encabezado = data;
    });
  }

  updateEnc() {
    this.datosPortfolio.updateEnc(this.id, this.encabezado).subscribe(data => {
      this.router.navigate(['']);
    }
    );
  }

}
