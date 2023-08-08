import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilaresPageRoutingModule } from './pilares-routing.module';

import { PilaresPage } from './pilares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilaresPageRoutingModule
  ],
  declarations: [PilaresPage]
})
export class PilaresPageModule {}
