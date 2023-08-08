import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandamientosPage } from './mandamientos.page';

const routes: Routes = [
  {
    path: '',
    component: MandamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandamientosPageRoutingModule {}
