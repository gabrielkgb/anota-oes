import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/servico/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  minhaLista:any[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private loadinControl: LoadingController,
    private toast: ToastController,
    private alertController: AlertController
    ) {}

  ngOnInit(): void {
    this.carregando();
    this.firebaseService.consulta().subscribe(results => this.minhaLista = results);
  }

  async carregando(){
    const load = this.loadinControl.create({
      mode: 'ios',
      message: 'Aguarde...',
      duration: 1000
    });
    (await load).present();
  }

  async mensagem(){
    const msg = this.toast.create({
      mode: 'ios',
      message: 'Item excluido com sucesso!',
      color: 'danger',
      position: 'top',
      duration: 2000 
    }); 
    (await msg).present();
  }

  async apaguei(id: string) {
    const alert = await this.alertController.create({
      header: 'Você tem certeza?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
        }, {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.firebaseService.excluir(id);
            this.mensagem();
          }
        }
      ]
    });

    await alert.present();
  }
}
