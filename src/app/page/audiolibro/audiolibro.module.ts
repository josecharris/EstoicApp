import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiolibroPageRoutingModule } from './audiolibro-routing.module';

import { AudiolibroPage } from './audiolibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiolibroPageRoutingModule
  ],
  declarations: [AudiolibroPage]
})
export class AudiolibroPageModule {}
