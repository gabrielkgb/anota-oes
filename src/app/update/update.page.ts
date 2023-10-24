import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  nameButton = 'Atualizar';

  /* atributo que guarda os dados do formulario */
  form!:FormGroup;

  /* Guarda o ID */
  routerId = null; 

  /* Recebe os dados do BD */
  anotacao = {};

  constructor(
    /* Ferramneta de criação de formulario */
    private formBuilder:FormBuilder,

    /* Serviço odo firebsae craido por nos */
    private firebaseService: FirebaseService,
    
    /* Ferramenta para caputurar o id */
    private activateRouter: ActivatedRoute,

    /* Router - Me permite navegar entre paginas */
    private router: Router
  ) { }

  ngOnInit() {

    /* Instacia do metodo validaform */
    this.validaForm('');

    /* Capturar o id da rota */
    this.routerId = this.activateRouter.snapshot.params['id'];

    /* caso exista o id pega ele no banco de dados */
    if(this.routerId){
      this.firebaseService.consultaUm(this.routerId).subscribe(caixinha => this.validaForm(caixinha));
    }
  }

  /*  Metodo de criação e validação do formulario */
  validaForm(dados: any){
    this.form = this.formBuilder.group({
      item: [dados.item,[Validators.required, Validators.minLength(3)]],
      quant: [dados.quant,[Validators.required, Validators.maxLength(10)]]
    });
  }

  /* Metodo do botao do formulario */
  updateButton(){
    this.firebaseService.editar(this.form.value,this.routerId);

    /* Nveagar para  a pagina principal */
    this.router.navigate(['/']);
  }

}


/* 
  1 - Criar a pagina de formulario - ok
  2 - Preparar o update para reeber um id - alterar a rota - ok
  3 - Capturar o id passado na rota(activtedRouter) - ok
  4 - Consulta ao banco de dados - ok
  5 - Passar os dados para o formulario
*/