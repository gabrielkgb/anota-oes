import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';
import { Anotacao } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  dadosCollection:AngularFirestoreCollection

  constructor(private angularFirestore: AngularFirestore ){ 
   
    this.dadosCollection = angularFirestore.collection('listaAnotacao');
  }

  cadastro(dados:any){
    return this.dadosCollection.add(dados);
  }

  consultaUm(id:any){
    return this.dadosCollection.doc(id).valueChanges();
  }

  consulta(){
    return this.dadosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    );
  }

  editar(dados: any, id:any){
    return this.dadosCollection.doc(id).update(dados);
  }

  /* Metodo de exclusao */
  excluir(id:any){
    return this.dadosCollection.doc(id).delete();
  }
}
