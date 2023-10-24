import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';

import { AutenticarService } from '../servico/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class RotasGuard implements CanActivate {
 
  constructor(private auth:AutenticarService, private rt:Router){
  }

  canActivate(): Promise<boolean>{
    return new Promise( results => {
      this.auth.getAuth().onAuthStateChanged(user => {
        if(!user) this.rt.navigate(['']);
        results(user ? true: false)
      })
    })
   }
  }
  

