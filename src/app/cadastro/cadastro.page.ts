import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AutenticarService } from '../../app/servico/authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
 

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private autenticar: AutenticarService) { }

  ngOnInit() {
   
  }


  cadastro(form: any){
    
    this.autenticar.registrar(form.value);
  }
  
  
 
}