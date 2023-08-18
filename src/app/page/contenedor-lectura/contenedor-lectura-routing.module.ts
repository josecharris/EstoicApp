import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenedorLecturaPage } from './contenedor-lectura.page';

const routes: Routes = [
  {
    path: '',
    component: ContenedorLecturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenedorLecturaPageRoutingModule {}
