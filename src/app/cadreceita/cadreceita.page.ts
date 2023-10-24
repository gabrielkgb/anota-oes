import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireserviceService } from '../servico/fireservice.service';
import { FirebaseService } from 'src/servico/firebase.service';

@Component({
  selector: 'app-cadreceita',
  templateUrl: './cadreceita.page.html',
  styleUrls: ['./cadreceita.page.scss'],
})
export class CadreceitaPage implements OnInit {

  nameButton = 'Cadastrar';

 
  form!:FormGroup;

 
  constructor(
  
    private formBuilder:FormBuilder,

    private firebaseService: FirebaseService,
    
   private router: Router
    ) { }

  ngOnInit() {

    this.validaForm();
  }

  validaForm(){
    this.form = this.formBuilder.group({
      item: ['',[Validators.required, Validators.minLength(3)]],
      quant: ['',[Validators.required, Validators.maxLength(10)]]
    })
  }

  cadastroButton(){
  
    this.firebaseService.cadastro(this.form.value);

    this.router.navigate(['/']);
  }
}
