import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReflexionPage } from './reflexion.page';

const routes: Routes = [
  {
    path: '',
    component: ReflexionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReflexionPageRoutingModule {}
