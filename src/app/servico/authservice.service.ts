import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(public ngFireAut: AngularFireAuth) { }

  registrar(dados: any) {
    return this.ngFireAut.createUserWithEmailAndPassword(dados.email,dados.password);
  };

  login(dados: any){
    return this.ngFireAut.signInWithEmailAndPassword(dados.email,dados.password)
  };

   reset(email:string){
    return this.ngFireAut.sendPasswordResetEmail(email)
  };

  deslogar(){
    return this.ngFireAut.signOut()
  };

  async getUser(){
    return await this.ngFireAut.currentUser
  }

  getAuth(){
    return this.ngFireAut;
  }


}