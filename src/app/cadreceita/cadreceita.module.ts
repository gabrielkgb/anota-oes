import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadreceitaPageRoutingModule } from './cadreceita-routing.module';

import { CadreceitaPage } from './cadreceita.page';
import { HeaderModule } from '../componentes/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadreceitaPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
  declarations: [CadreceitaPage]
})
export class CadreceitaPageModule {}
