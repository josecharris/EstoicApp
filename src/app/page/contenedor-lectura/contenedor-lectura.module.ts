import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenedorLecturaPageRoutingModule } from './contenedor-lectura-routing.module';
import { ContenedorLecturaPage } from './contenedor-lectura.page';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenedorLecturaPageRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [ContenedorLecturaPage]
})
export class ContenedorLecturaPageModule {}
