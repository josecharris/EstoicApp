import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrasesPageRoutingModule } from './frases-routing.module';

import { FrasesPage } from './frases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrasesPageRoutingModule
  ],
  declarations: [FrasesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrasesPageModule {}
