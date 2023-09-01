import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReflexionPageRoutingModule } from './reflexion-routing.module';

import { ReflexionPage } from './reflexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReflexionPageRoutingModule
  ],
  declarations: [ReflexionPage]
})
export class ReflexionPageModule {}
