import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDiarioPageRoutingModule } from './form-diario-routing.module';

import { FormDiarioPage } from './form-diario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDiarioPageRoutingModule
  ],
  declarations: [FormDiarioPage]
})
export class FormDiarioPageModule {}
