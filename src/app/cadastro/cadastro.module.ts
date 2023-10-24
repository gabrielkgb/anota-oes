import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { HeaderModule } from '../componentes/header/header.module';
import { MenuModule } from '../componentes/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    MenuModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
