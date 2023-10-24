import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  dadosColletion:AngularFirestoreCollection;
  contasColletion:AngularFirestoreCollection;

  constructor(private angularFire:AngularFirestore) {

    this.dadosColletion = angularFire.collection('receitas');
    this.contasColletion = angularFire.collection('contas');
   }

   cadastrarConta(dados: any){
    return this.contasColletion.add(dados);
   }

   

}
