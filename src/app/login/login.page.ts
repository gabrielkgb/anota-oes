import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../servico/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private autenticar: AutenticarService
  ){}

  logar(form: any){
    this.autenticar.login(form.value);
    this.autenticar.getAuth().onAuthStateChanged(user => {
      if(user) console.log(user.email);      
    })
    
  }

}
