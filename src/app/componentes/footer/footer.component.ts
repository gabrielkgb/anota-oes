import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/servico/authservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    private auth:AutenticarService,
    private router: Router,
    ) { }

  ngOnInit() {}

  deslogar(){
     this.auth.deslogar(); 
  }

  home(){
    this.router.navigate(['/home']);
    setTimeout(this.refresh,10);
  }
  Adicionar(){
    this.router.navigate(['/cadreceita']);
  }


  refresh(){
    location.reload();
  }
}
