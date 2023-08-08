import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriadaPageRoutingModule } from './triada-routing.module';

import { TriadaPage } from './triada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriadaPageRoutingModule
  ],
  declarations: [TriadaPage]
})
export class TriadaPageModule {}
