import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDiarioPage } from './form-diario.page';

const routes: Routes = [
  {
    path: '',
    component: FormDiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDiarioPageRoutingModule {}
