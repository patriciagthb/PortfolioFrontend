import { Component, OnInit } from '@angular/core';
import { PortfolioService} from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string ='';
  password: string ='';
  loginerror: string ='';

  constructor(private datosPortfolio: PortfolioService,
              private router:Router,
              private route: ActivatedRoute) { }

  login(){

    const user = {username: this.username, password: this.password};

    this.datosPortfolio.login(user).subscribe(data =>{
      if(data==null) this.loginerror = "Usuario o Contraseña inválidos";

      else{
        this.loginerror="";
        this.datosPortfolio.setToken(data.id);
        this.router.navigate(['/home'])
      }
    })
  }

  ngOnInit(): void {
  }

}
