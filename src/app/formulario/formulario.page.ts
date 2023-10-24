import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatabaseService } from '../servico/database.service';
import { FirebaseService } from '../servico/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  titulo = "Cadastro";
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  nameButton = 'Cadastrar';

  /* atributo que guarda os dados do formulario */
  form!:FormGroup;

  /* 
    Precisamos injetar a ferramenta formbuilder 
    A função do formbuilder é criar e validar os campos do formulario  
  */
  constructor(
    /* Ferramneta de criação de formulario */
    private formBuilder:FormBuilder,

    /* Nosso servço de banco de dados */
    //private bancoDados: DatabaseService

    /* Serviço odo firebsae craido por nos */
    private firebaseService: FirebaseService,
    
    /* Router - Me permite navegar entre paginas */
    private router: Router
    ) { }

  ngOnInit() {
    /* Inicailizar o metodo validaForm */
    this.validaForm();
  }

  /*  Metodo de criação e validação do formulario */
  validaForm(){
    this.form = this.formBuilder.group({
      item: ['',[Validators.required, Validators.minLength(3)]],
      quant: ['',[Validators.required, Validators.maxLength(10)]]
    })
  }

  /* Metodo do botão do formulario */
  cadastroButton(){
    /* Usando o metodo de cadastro do nosso serviço HTTPCLIENT */
    //this.bancoDados.cadastro(this.form.value);

    /* Usando O SERVIÇO DO FIREBASE*/
    this.firebaseService.cadastro(this.form.value);

    /* Navega para a pagina principal  */
    this.router.navigate(['/']);
  }

}
