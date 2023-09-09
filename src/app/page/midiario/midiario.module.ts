import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidiarioPageRoutingModule } from './midiario-routing.module';

import { MidiarioPage } from './midiario.page';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidiarioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MidiarioPage]
})
export class MidiarioPageModule {}
