import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticarPageRoutingModule } from './practicar-routing.module';

import { PracticarPage } from './practicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticarPageRoutingModule
  ],
  declarations: [PracticarPage]
})
export class PracticarPageModule {}
