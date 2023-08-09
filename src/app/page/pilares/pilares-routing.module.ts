import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilaresPage } from './pilares.page';

const routes: Routes = [
  {
    path: '',
    component: PilaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilaresPageRoutingModule {}
