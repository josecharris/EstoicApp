import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandamientosPageRoutingModule } from './mandamientos-routing.module';

import { MandamientosPage } from './mandamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandamientosPageRoutingModule
  ],
  declarations: [MandamientosPage]
})
export class MandamientosPageModule {}
